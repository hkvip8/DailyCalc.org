const SIMPLE_CALCULATORS = {
    "loan-calculator": {
        title: "Loan Calculator",
        category: "Finance",
        icon: "fa-hand-holding-dollar",
        tagline: "Estimate monthly payments, total interest, and payoff cost.",
        resultLabel: "Monthly Payment",
        description: "Calculate loan payments with interest, total cost, and payoff insights.",
        inputs: [
            { id: "loanAmount", label: "Loan Amount", type: "number", unit: "$", value: 25000, step: "0.01", min: 0 },
            { id: "annualRate", label: "Annual Interest Rate", type: "number", unit: "%", value: 6.5, step: "0.01", min: 0 },
            { id: "termYears", label: "Loan Term", type: "number", unit: "years", value: 5, step: "1", min: 1 }
        ],
        outputs: [
            { id: "monthlyPayment", label: "Monthly Payment", format: "currency" },
            { id: "totalInterest", label: "Total Interest", format: "currency" },
            { id: "totalCost", label: "Total Cost", format: "currency" }
        ],
        mainOutput: "monthlyPayment",
        compute(values) {
            const principal = values.loanAmount;
            const rate = values.annualRate / 100 / 12;
            const months = values.termYears * 12;
            const payment = rate === 0 ? principal / months : (principal * rate) / (1 - Math.pow(1 + rate, -months));
            const totalCost = payment * months;
            const totalInterest = totalCost - principal;
            return {
                results: { monthlyPayment: payment, totalInterest, totalCost },
                summary: `A $${principal.toLocaleString()} loan over ${months} months at ${values.annualRate}% costs about $${payment.toFixed(2)} per month.`,
                formula: "Monthly Payment = P × r / (1 − (1 + r)^−n)"
            };
        },
        seo: {
            title: "Plan Loan Payments Confidently",
            bullets: [
                "See monthly payment estimates instantly.",
                "Understand total interest over the full term.",
                "Compare loan lengths and rates quickly."
            ]
        }
    },
    "auto-loan-calculator": {
        title: "Auto Loan Calculator",
        category: "Finance",
        icon: "fa-car",
        tagline: "Estimate car loan payments with taxes and trade-in credits.",
        resultLabel: "Monthly Payment",
        description: "Calculate auto loan payments including down payment, trade-in value, and sales tax.",
        inputs: [
            { id: "vehiclePrice", label: "Vehicle Price", type: "number", unit: "$", value: 32000, step: "0.01", min: 0 },
            { id: "downPayment", label: "Down Payment", type: "number", unit: "$", value: 4000, step: "0.01", min: 0 },
            { id: "tradeIn", label: "Trade-In Value", type: "number", unit: "$", value: 0, step: "0.01", min: 0 },
            { id: "salesTaxRate", label: "Sales Tax Rate", type: "number", unit: "%", value: 7.5, step: "0.01", min: 0 },
            { id: "annualRate", label: "Loan APR", type: "number", unit: "%", value: 5.9, step: "0.01", min: 0 },
            { id: "termMonths", label: "Loan Term", type: "number", unit: "months", value: 60, step: "1", min: 12 }
        ],
        outputs: [
            { id: "loanAmount", label: "Estimated Loan Amount", format: "currency" },
            { id: "monthlyPayment", label: "Monthly Payment", format: "currency" },
            { id: "totalInterest", label: "Total Interest", format: "currency" },
            { id: "totalCost", label: "Total Cost", format: "currency" }
        ],
        mainOutput: "monthlyPayment",
        compute(values) {
            const taxablePrice = Math.max(values.vehiclePrice - values.tradeIn, 0);
            const taxAmount = taxablePrice * (values.salesTaxRate / 100);
            const loanAmount = Math.max(values.vehiclePrice + taxAmount - values.downPayment - values.tradeIn, 0);
            const rate = values.annualRate / 100 / 12;
            const months = values.termMonths;
            const payment = rate === 0 ? loanAmount / months : (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));
            const totalCost = payment * months;
            const totalInterest = totalCost - loanAmount;
            return {
                results: { loanAmount, monthlyPayment: payment, totalInterest, totalCost },
                summary: `Finance about $${loanAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })} after tax and down payment.`,
                formula: "Auto Loan Payment uses standard amortization with tax-adjusted principal."
            };
        },
        seo: {
            title: "Understand Your Auto Loan",
            bullets: [
                "Include sales tax and trade-in credits.",
                "Compare loan terms and APRs quickly.",
                "See total interest before you sign."
            ]
        }
    },
    "interest-calculator": {
        title: "Interest Calculator",
        category: "Finance",
        icon: "fa-percent",
        tagline: "Calculate how interest grows with compounding.",
        resultLabel: "Ending Balance",
        description: "Estimate interest earned and future value with compound interest.",
        inputs: [
            { id: "principal", label: "Starting Balance", type: "number", unit: "$", value: 5000, step: "0.01", min: 0 },
            { id: "annualRate", label: "Annual Interest Rate", type: "number", unit: "%", value: 4.5, step: "0.01", min: 0 },
            { id: "years", label: "Years", type: "number", unit: "years", value: 5, step: "0.1", min: 0 },
            {
                id: "compoundsPerYear",
                label: "Compounds Per Year",
                type: "select",
                options: [
                    { value: "1", label: "Annually" },
                    { value: "4", label: "Quarterly" },
                    { value: "12", label: "Monthly" },
                    { value: "365", label: "Daily" }
                ],
                value: "12"
            }
        ],
        outputs: [
            { id: "endingBalance", label: "Ending Balance", format: "currency" },
            { id: "interestEarned", label: "Interest Earned", format: "currency" },
            { id: "effectiveRate", label: "Effective Annual Rate", format: "percent" }
        ],
        mainOutput: "endingBalance",
        compute(values) {
            const principal = values.principal;
            const rate = values.annualRate / 100;
            const n = Number(values.compoundsPerYear);
            const years = values.years;
            const endingBalance = principal * Math.pow(1 + rate / n, n * years);
            const interestEarned = endingBalance - principal;
            const effectiveRate = Math.pow(1 + rate / n, n) - 1;
            return {
                results: { endingBalance, interestEarned, effectiveRate },
                summary: `Your balance grows to about $${endingBalance.toFixed(2)} after ${years} years.`,
                formula: "Future Value = P × (1 + r/n)^(n×t)"
            };
        },
        seo: {
            title: "See Interest Growth Clearly",
            bullets: [
                "Compare different compounding schedules.",
                "Understand effective annual yield.",
                "Plan savings goals with precision."
            ]
        }
    },
    "payment-calculator": {
        title: "Payment Calculator",
        category: "Finance",
        icon: "fa-credit-card",
        tagline: "Estimate payoff time from a fixed monthly payment.",
        resultLabel: "Payoff Time",
        description: "Calculate how long it takes to pay down a balance with a fixed payment.",
        inputs: [
            { id: "balance", label: "Current Balance", type: "number", unit: "$", value: 8000, step: "0.01", min: 0 },
            { id: "annualRate", label: "Annual Interest Rate", type: "number", unit: "%", value: 18.9, step: "0.01", min: 0 },
            { id: "monthlyPayment", label: "Monthly Payment", type: "number", unit: "$", value: 250, step: "0.01", min: 0 }
        ],
        outputs: [
            { id: "payoffMonths", label: "Months to Payoff", format: "number" },
            { id: "totalInterest", label: "Total Interest", format: "currency" },
            { id: "totalPaid", label: "Total Paid", format: "currency" }
        ],
        mainOutput: "payoffMonths",
        compute(values) {
            const balance = values.balance;
            const rate = values.annualRate / 100 / 12;
            const payment = values.monthlyPayment;
            if (payment <= balance * rate) {
                return {
                    results: { payoffMonths: "Payment too low", totalInterest: 0, totalPaid: 0 },
                    summary: "Increase your payment to cover monthly interest.",
                    formula: "Payoff months uses logarithmic amortization formula."
                };
            }
            const months = Math.ceil(-Math.log(1 - rate * balance / payment) / Math.log(1 + rate));
            const totalPaid = payment * months;
            const totalInterest = totalPaid - balance;
            return {
                results: { payoffMonths: months, totalInterest, totalPaid },
                summary: `You can pay off the balance in about ${months} months.`,
                formula: "n = −ln(1 − rP/A) / ln(1 + r)"
            };
        },
        seo: {
            title: "Plan Your Payoff Strategy",
            bullets: [
                "Estimate payoff time with fixed payments.",
                "See total interest before you commit.",
                "Adjust payments to accelerate debt payoff."
            ]
        }
    },
    "retirement-calculator": {
        title: "Retirement Calculator",
        category: "Finance",
        icon: "fa-piggy-bank",
        tagline: "Project your retirement savings growth over time.",
        resultLabel: "Projected Balance",
        description: "Estimate retirement savings growth from contributions and investment returns.",
        inputs: [
            { id: "currentSavings", label: "Current Savings", type: "number", unit: "$", value: 45000, step: "0.01", min: 0 },
            { id: "annualContribution", label: "Annual Contribution", type: "number", unit: "$", value: 6000, step: "0.01", min: 0 },
            { id: "annualReturn", label: "Expected Annual Return", type: "number", unit: "%", value: 6, step: "0.01", min: 0 },
            { id: "years", label: "Years to Retirement", type: "number", unit: "years", value: 20, step: "1", min: 0 }
        ],
        outputs: [
            { id: "futureValue", label: "Future Value", format: "currency" },
            { id: "totalContributions", label: "Total Contributions", format: "currency" },
            { id: "investmentGrowth", label: "Investment Growth", format: "currency" }
        ],
        mainOutput: "futureValue",
        compute(values) {
            const rate = values.annualReturn / 100;
            const years = values.years;
            const futureValue = values.currentSavings * Math.pow(1 + rate, years) +
                values.annualContribution * ((Math.pow(1 + rate, years) - 1) / rate || 0);
            const totalContributions = values.currentSavings + values.annualContribution * years;
            const investmentGrowth = futureValue - totalContributions;
            return {
                results: { futureValue, totalContributions, investmentGrowth },
                summary: `Retirement savings could reach $${futureValue.toFixed(2)} in ${years} years.`,
                formula: "FV = P(1+r)^t + PMT × ((1+r)^t − 1)/r"
            };
        },
        seo: {
            title: "Forecast Retirement Savings",
            bullets: [
                "See how contributions compound over time.",
                "Compare return assumptions instantly.",
                "Plan realistic retirement targets."
            ]
        }
    },
    "amortization-calculator": {
        title: "Amortization Calculator",
        category: "Finance",
        icon: "fa-table-list",
        tagline: "Break down payments into principal and interest.",
        resultLabel: "Monthly Payment",
        description: "Estimate loan amortization totals including principal and interest split.",
        inputs: [
            { id: "loanAmount", label: "Loan Amount", type: "number", unit: "$", value: 180000, step: "0.01", min: 0 },
            { id: "annualRate", label: "Annual Interest Rate", type: "number", unit: "%", value: 5.25, step: "0.01", min: 0 },
            { id: "termYears", label: "Loan Term", type: "number", unit: "years", value: 30, step: "1", min: 1 }
        ],
        outputs: [
            { id: "monthlyPayment", label: "Monthly Payment", format: "currency" },
            { id: "totalInterest", label: "Total Interest", format: "currency" },
            { id: "firstMonthInterest", label: "First Month Interest", format: "currency" },
            { id: "firstMonthPrincipal", label: "First Month Principal", format: "currency" }
        ],
        mainOutput: "monthlyPayment",
        compute(values) {
            const principal = values.loanAmount;
            const rate = values.annualRate / 100 / 12;
            const months = values.termYears * 12;
            const payment = rate === 0 ? principal / months : (principal * rate) / (1 - Math.pow(1 + rate, -months));
            const totalInterest = payment * months - principal;
            const firstMonthInterest = principal * rate;
            const firstMonthPrincipal = payment - firstMonthInterest;
            return {
                results: { monthlyPayment: payment, totalInterest, firstMonthInterest, firstMonthPrincipal },
                summary: `First payment applies about $${firstMonthPrincipal.toFixed(2)} to principal.`,
                formula: "Payment = P × r / (1 − (1 + r)^−n)"
            };
        },
        seo: {
            title: "Understand Amortization Basics",
            bullets: [
                "See how payments split between interest and principal.",
                "Estimate total interest across the full term.",
                "Compare different loan lengths quickly."
            ]
        }
    },
    "investment-calculator": {
        title: "Investment Calculator",
        category: "Finance",
        icon: "fa-chart-line",
        tagline: "Project portfolio growth with monthly contributions.",
        resultLabel: "Projected Value",
        description: "Estimate investment growth from starting balance and monthly contributions.",
        inputs: [
            { id: "initialInvestment", label: "Initial Investment", type: "number", unit: "$", value: 15000, step: "0.01", min: 0 },
            { id: "monthlyContribution", label: "Monthly Contribution", type: "number", unit: "$", value: 400, step: "0.01", min: 0 },
            { id: "annualReturn", label: "Expected Annual Return", type: "number", unit: "%", value: 7, step: "0.01", min: 0 },
            { id: "years", label: "Investment Horizon", type: "number", unit: "years", value: 15, step: "1", min: 0 }
        ],
        outputs: [
            { id: "futureValue", label: "Future Value", format: "currency" },
            { id: "totalContributions", label: "Total Contributions", format: "currency" },
            { id: "investmentGrowth", label: "Investment Growth", format: "currency" }
        ],
        mainOutput: "futureValue",
        compute(values) {
            const rate = values.annualReturn / 100 / 12;
            const months = values.years * 12;
            const futureValue = values.initialInvestment * Math.pow(1 + rate, months) +
                (rate === 0 ? values.monthlyContribution * months : values.monthlyContribution * ((Math.pow(1 + rate, months) - 1) / rate));
            const totalContributions = values.initialInvestment + values.monthlyContribution * months;
            const investmentGrowth = futureValue - totalContributions;
            return {
                results: { futureValue, totalContributions, investmentGrowth },
                summary: `Your portfolio could grow to about $${futureValue.toFixed(2)} over ${values.years} years.`,
                formula: "FV = P(1+r)^n + PMT × ((1+r)^n − 1)/r"
            };
        },
        seo: {
            title: "Project Long-Term Investments",
            bullets: [
                "Include monthly contributions.",
                "Compare different return assumptions.",
                "See how compounding drives growth."
            ]
        }
    },
    "inflation-calculator": {
        title: "Inflation Calculator",
        category: "Finance",
        icon: "fa-money-bill-trend-up",
        tagline: "Adjust dollars for inflation over time.",
        resultLabel: "Future Value",
        description: "See how inflation changes the value of money over time.",
        inputs: [
            { id: "currentValue", label: "Current Value", type: "number", unit: "$", value: 1000, step: "0.01", min: 0 },
            { id: "inflationRate", label: "Annual Inflation Rate", type: "number", unit: "%", value: 3, step: "0.01", min: 0 },
            { id: "years", label: "Years", type: "number", unit: "years", value: 10, step: "1", min: 0 }
        ],
        outputs: [
            { id: "futureValue", label: "Future Value", format: "currency" },
            { id: "valueChange", label: "Increase", format: "currency" },
            { id: "percentChange", label: "Percent Change", format: "percent" }
        ],
        mainOutput: "futureValue",
        compute(values) {
            const futureValue = values.currentValue * Math.pow(1 + values.inflationRate / 100, values.years);
            const valueChange = futureValue - values.currentValue;
            const percentChange = valueChange / values.currentValue;
            return {
                results: { futureValue, valueChange, percentChange },
                summary: `Your $${values.currentValue.toLocaleString()} would need to be about $${futureValue.toFixed(2)} in ${values.years} years.`,
                formula: "Future Value = Present Value × (1 + i)^t"
            };
        },
        seo: {
            title: "Stay Ahead of Inflation",
            bullets: [
                "Estimate future purchasing costs.",
                "See the true impact of inflation.",
                "Plan long-term budgets more accurately."
            ]
        }
    },
    "finance-calculator": {
        title: "Finance Calculator",
        category: "Finance",
        icon: "fa-calculator",
        tagline: "Track monthly cash flow and savings capacity.",
        resultLabel: "Monthly Surplus",
        description: "Calculate monthly surplus after expenses and savings goals.",
        inputs: [
            { id: "monthlyIncome", label: "Monthly Income", type: "number", unit: "$", value: 5200, step: "0.01", min: 0 },
            { id: "fixedExpenses", label: "Fixed Expenses", type: "number", unit: "$", value: 1800, step: "0.01", min: 0 },
            { id: "variableExpenses", label: "Variable Expenses", type: "number", unit: "$", value: 1200, step: "0.01", min: 0 },
            { id: "savingsGoal", label: "Monthly Savings Goal", type: "number", unit: "$", value: 500, step: "0.01", min: 0 }
        ],
        outputs: [
            { id: "monthlySurplus", label: "Monthly Surplus", format: "currency" },
            { id: "expenseRatio", label: "Expense Ratio", format: "percent" },
            { id: "savingsRate", label: "Savings Rate", format: "percent" }
        ],
        mainOutput: "monthlySurplus",
        compute(values) {
            const totalExpenses = values.fixedExpenses + values.variableExpenses + values.savingsGoal;
            const monthlySurplus = values.monthlyIncome - totalExpenses;
            const expenseRatio = (values.fixedExpenses + values.variableExpenses) / values.monthlyIncome;
            const savingsRate = values.savingsGoal / values.monthlyIncome;
            return {
                results: { monthlySurplus, expenseRatio, savingsRate },
                summary: `You have about $${monthlySurplus.toFixed(2)} left after planned spending.`,
                formula: "Surplus = Income − (Fixed + Variable + Savings)"
            };
        },
        seo: {
            title: "Stay on Top of Monthly Cash Flow",
            bullets: [
                "Understand how expenses affect savings.",
                "Calculate savings rate in seconds.",
                "Adjust budgets quickly and clearly."
            ]
        }
    },
    "savings-goal-calculator": {
        title: "Savings Goal Calculator",
        category: "Finance",
        icon: "fa-bullseye",
        tagline: "See if your monthly savings hit your target.",
        resultLabel: "Projected Savings",
        description: "Estimate how much you will save toward a goal over time.",
        inputs: [
            { id: "goalAmount", label: "Goal Amount", type: "number", unit: "$", value: 10000, step: "0.01", min: 0 },
            { id: "currentSavings", label: "Current Savings", type: "number", unit: "$", value: 1500, step: "0.01", min: 0 },
            { id: "monthlyContribution", label: "Monthly Contribution", type: "number", unit: "$", value: 350, step: "0.01", min: 0 },
            { id: "annualRate", label: "Annual Interest Rate", type: "number", unit: "%", value: 2.5, step: "0.01", min: 0 },
            { id: "years", label: "Time Horizon", type: "number", unit: "years", value: 2, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "projectedSavings", label: "Projected Savings", format: "currency" },
            { id: "totalContributions", label: "Total Contributions", format: "currency" },
            { id: "goalGap", label: "Goal Gap", format: "currency" }
        ],
        mainOutput: "projectedSavings",
        compute(values) {
            const rate = values.annualRate / 100 / 12;
            const months = values.years * 12;
            const projectedSavings = values.currentSavings * Math.pow(1 + rate, months) +
                (rate === 0 ? values.monthlyContribution * months : values.monthlyContribution * ((Math.pow(1 + rate, months) - 1) / rate));
            const totalContributions = values.currentSavings + values.monthlyContribution * months;
            const goalGap = values.goalAmount - projectedSavings;
            return {
                results: { projectedSavings, totalContributions, goalGap },
                summary: goalGap <= 0 ? "You are on track to exceed your goal." : `You are short by about $${goalGap.toFixed(2)}.`,
                formula: "Savings uses compound interest with monthly contributions."
            };
        },
        seo: {
            title: "Reach Savings Goals Faster",
            bullets: [
                "See how contributions and interest add up.",
                "Understand how far you are from your goal.",
                "Adjust contributions for better results."
            ]
        }
    },
    "compound-interest-calculator": {
        title: "Compound Interest Calculator",
        category: "Finance",
        icon: "fa-coins",
        tagline: "See how compound interest grows your savings.",
        resultLabel: "Ending Balance",
        description: "Calculate compound interest growth over time.",
        inputs: [
            { id: "principal", label: "Principal", type: "number", unit: "$", value: 2000, step: "0.01", min: 0 },
            { id: "annualRate", label: "Annual Interest Rate", type: "number", unit: "%", value: 5, step: "0.01", min: 0 },
            { id: "compoundsPerYear", label: "Compounds Per Year", type: "number", unit: "times", value: 12, step: "1", min: 1 },
            { id: "years", label: "Years", type: "number", unit: "years", value: 8, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "endingBalance", label: "Ending Balance", format: "currency" },
            { id: "interestEarned", label: "Interest Earned", format: "currency" },
            { id: "effectiveRate", label: "Effective Annual Rate", format: "percent" }
        ],
        mainOutput: "endingBalance",
        compute(values) {
            const rate = values.annualRate / 100;
            const n = values.compoundsPerYear;
            const endingBalance = values.principal * Math.pow(1 + rate / n, n * values.years);
            const interestEarned = endingBalance - values.principal;
            const effectiveRate = Math.pow(1 + rate / n, n) - 1;
            return {
                results: { endingBalance, interestEarned, effectiveRate },
                summary: `Compounding grows your balance to $${endingBalance.toFixed(2)}.`,
                formula: "A = P(1 + r/n)^(n×t)"
            };
        },
        seo: {
            title: "Unlock the Power of Compounding",
            bullets: [
                "See how frequency affects growth.",
                "Track interest earned over time.",
                "Compare effective annual rates quickly."
            ]
        }
    },
    "simple-interest-calculator": {
        title: "Simple Interest Calculator",
        category: "Finance",
        icon: "fa-scale-balanced",
        tagline: "Quickly compute simple interest on a principal.",
        resultLabel: "Total Amount",
        description: "Calculate simple interest and total value over time.",
        inputs: [
            { id: "principal", label: "Principal", type: "number", unit: "$", value: 3000, step: "0.01", min: 0 },
            { id: "annualRate", label: "Annual Interest Rate", type: "number", unit: "%", value: 4, step: "0.01", min: 0 },
            { id: "years", label: "Years", type: "number", unit: "years", value: 3, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "interestEarned", label: "Interest Earned", format: "currency" },
            { id: "totalAmount", label: "Total Amount", format: "currency" }
        ],
        mainOutput: "totalAmount",
        compute(values) {
            const interestEarned = values.principal * (values.annualRate / 100) * values.years;
            const totalAmount = values.principal + interestEarned;
            return {
                results: { interestEarned, totalAmount },
                summary: `Simple interest adds about $${interestEarned.toFixed(2)} over ${values.years} years.`,
                formula: "Interest = P × r × t"
            };
        },
        seo: {
            title: "Calculate Simple Interest Fast",
            bullets: [
                "Estimate interest without compounding.",
                "See total owed at the end of the term.",
                "Ideal for short-term lending."
            ]
        }
    },
    "net-worth-calculator": {
        title: "Net Worth Calculator",
        category: "Finance",
        icon: "fa-scale-unbalanced",
        tagline: "Track assets, liabilities, and net worth.",
        resultLabel: "Net Worth",
        description: "Calculate total net worth from assets and liabilities.",
        inputs: [
            { id: "assets", label: "Total Assets", type: "number", unit: "$", value: 125000, step: "0.01", min: 0 },
            { id: "liabilities", label: "Total Liabilities", type: "number", unit: "$", value: 62000, step: "0.01", min: 0 }
        ],
        outputs: [
            { id: "netWorth", label: "Net Worth", format: "currency" },
            { id: "debtRatio", label: "Debt Ratio", format: "percent" },
            { id: "assetCoverage", label: "Asset Coverage", format: "number" }
        ],
        mainOutput: "netWorth",
        compute(values) {
            const netWorth = values.assets - values.liabilities;
            const debtRatio = values.assets === 0 ? 0 : values.liabilities / values.assets;
            const assetCoverage = values.liabilities === 0 ? "∞" : values.assets / values.liabilities;
            return {
                results: { netWorth, debtRatio, assetCoverage },
                summary: `Your net worth is $${netWorth.toFixed(2)}.`,
                formula: "Net Worth = Assets − Liabilities"
            };
        },
        seo: {
            title: "Keep Tabs on Net Worth",
            bullets: [
                "Balance assets against liabilities.",
                "Track debt ratio over time.",
                "Use as a baseline for financial planning."
            ]
        }
    },
    "salary-to-hourly-calculator": {
        title: "Salary to Hourly Calculator",
        category: "Finance",
        icon: "fa-clock",
        tagline: "Convert an annual salary into hourly pay.",
        resultLabel: "Hourly Rate",
        description: "Estimate hourly, weekly, and monthly earnings from salary.",
        inputs: [
            { id: "annualSalary", label: "Annual Salary", type: "number", unit: "$", value: 68000, step: "0.01", min: 0 },
            { id: "hoursPerWeek", label: "Hours Per Week", type: "number", unit: "hours", value: 40, step: "0.1", min: 1 },
            { id: "weeksPerYear", label: "Weeks Per Year", type: "number", unit: "weeks", value: 52, step: "1", min: 1 }
        ],
        outputs: [
            { id: "hourlyRate", label: "Hourly Rate", format: "currency" },
            { id: "weeklyPay", label: "Weekly Pay", format: "currency" },
            { id: "monthlyPay", label: "Monthly Pay", format: "currency" }
        ],
        mainOutput: "hourlyRate",
        compute(values) {
            const hoursPerYear = values.hoursPerWeek * values.weeksPerYear;
            const hourlyRate = hoursPerYear === 0 ? 0 : values.annualSalary / hoursPerYear;
            const weeklyPay = hourlyRate * values.hoursPerWeek;
            const monthlyPay = values.annualSalary / 12;
            return {
                results: { hourlyRate, weeklyPay, monthlyPay },
                summary: `An annual salary of $${values.annualSalary.toLocaleString()} equals about $${hourlyRate.toFixed(2)} per hour.`,
                formula: "Hourly Rate = Salary ÷ (Hours per Week × Weeks per Year)"
            };
        },
        seo: {
            title: "Translate Salary Into Hourly Pay",
            bullets: [
                "Compare salary offers quickly.",
                "Estimate weekly and monthly take-home pay.",
                "Adjust for different work schedules."
            ]
        }
    },
    "budget-planner-calculator": {
        title: "Budget Planner Calculator",
        category: "Finance",
        icon: "fa-wallet",
        tagline: "Break income into needs, wants, and savings.",
        resultLabel: "Needs Budget",
        description: "Split monthly income using the 50/30/20 budgeting guideline.",
        inputs: [
            { id: "monthlyIncome", label: "Monthly Income", type: "number", unit: "$", value: 4200, step: "0.01", min: 0 }
        ],
        outputs: [
            { id: "needsBudget", label: "Needs (50%)", format: "currency" },
            { id: "wantsBudget", label: "Wants (30%)", format: "currency" },
            { id: "savingsBudget", label: "Savings (20%)", format: "currency" }
        ],
        mainOutput: "needsBudget",
        compute(values) {
            const needsBudget = values.monthlyIncome * 0.5;
            const wantsBudget = values.monthlyIncome * 0.3;
            const savingsBudget = values.monthlyIncome * 0.2;
            return {
                results: { needsBudget, wantsBudget, savingsBudget },
                summary: "Use these targets to balance essentials, lifestyle, and savings goals.",
                formula: "Budget = Income × percentage"
            };
        },
        seo: {
            title: "Build a Balanced Monthly Budget",
            bullets: [
                "Allocate income across needs, wants, and savings.",
                "Quickly adjust targets with new income.",
                "Stay aligned with the 50/30/20 rule."
            ]
        }
    },
    "body-fat": {
        title: "Body Fat Calculator",
        category: "Health",
        icon: "fa-ruler-vertical",
        tagline: "Estimate body fat percentage using the Navy method.",
        resultLabel: "Body Fat %",
        description: "Calculate body fat percentage and lean mass from body measurements.",
        inputs: [
            {
                id: "gender",
                label: "Gender",
                type: "select",
                options: [
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" }
                ],
                value: "male"
            },
            { id: "weight", label: "Weight", type: "number", unit: "kg", value: 78, step: "0.1", min: 0 },
            { id: "height", label: "Height", type: "number", unit: "cm", value: 175, step: "0.1", min: 0 },
            { id: "waist", label: "Waist Circumference", type: "number", unit: "cm", value: 85, step: "0.1", min: 0 },
            { id: "neck", label: "Neck Circumference", type: "number", unit: "cm", value: 38, step: "0.1", min: 0 },
            { id: "hip", label: "Hip Circumference (Women)", type: "number", unit: "cm", value: 95, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "bodyFatPercent", label: "Body Fat %", format: "percent" },
            { id: "fatMass", label: "Fat Mass", format: "number", unit: "kg" },
            { id: "leanMass", label: "Lean Mass", format: "number", unit: "kg" }
        ],
        mainOutput: "bodyFatPercent",
        compute(values) {
            const height = values.height;
            const waist = values.waist;
            const neck = values.neck;
            const hip = values.hip;
            let bodyFat;
            if (values.gender === "female") {
                bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
            } else {
                bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
            }
            bodyFat = Math.max(bodyFat, 0) / 100;
            const fatMass = values.weight * bodyFat;
            const leanMass = values.weight - fatMass;
            return {
                results: { bodyFatPercent: bodyFat, fatMass, leanMass },
                summary: `Estimated body fat is ${(bodyFat * 100).toFixed(1)}% using the U.S. Navy method.`,
                formula: "Body Fat % uses waist, neck, and height measurements."
            };
        },
        seo: {
            title: "Measure Body Composition",
            bullets: [
                "Estimate body fat percentage fast.",
                "Track lean mass changes over time.",
                "Use standard U.S. Navy formulas."
            ]
        }
    },
    "ideal-weight": {
        title: "Ideal Weight Calculator",
        category: "Health",
        icon: "fa-child-reaching",
        tagline: "Estimate an ideal weight range by height.",
        resultLabel: "Ideal Weight",
        description: "Calculate ideal body weight using the Devine formula.",
        inputs: [
            {
                id: "gender",
                label: "Gender",
                type: "select",
                options: [
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" }
                ],
                value: "male"
            },
            { id: "height", label: "Height", type: "number", unit: "cm", value: 175, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "idealWeight", label: "Ideal Weight", format: "number", unit: "kg" },
            { id: "lowerRange", label: "Lower Range", format: "number", unit: "kg" },
            { id: "upperRange", label: "Upper Range", format: "number", unit: "kg" }
        ],
        mainOutput: "idealWeight",
        compute(values) {
            const base = values.gender === "female" ? 45.5 : 50;
            const idealWeight = base + 0.9 * Math.max(values.height - 152.4, 0);
            const lowerRange = idealWeight * 0.9;
            const upperRange = idealWeight * 1.1;
            return {
                results: { idealWeight, lowerRange, upperRange },
                summary: `A healthy range is roughly ${lowerRange.toFixed(1)}–${upperRange.toFixed(1)} kg.`,
                formula: "Devine Formula = Base + 0.9 × (height − 152.4cm)"
            };
        },
        seo: {
            title: "Find Your Ideal Weight Range",
            bullets: [
                "Use standard clinical formulas.",
                "See a 10% healthy range.",
                "Compare with current weight goals."
            ]
        }
    },
    "water-intake": {
        title: "Water Intake Calculator",
        category: "Health",
        icon: "fa-glass-water",
        tagline: "Estimate daily hydration needs based on lifestyle.",
        resultLabel: "Daily Water",
        description: "Calculate recommended daily water intake based on weight and activity.",
        inputs: [
            { id: "weight", label: "Weight", type: "number", unit: "kg", value: 70, step: "0.1", min: 0 },
            { id: "activityMinutes", label: "Activity Minutes", type: "number", unit: "min", value: 30, step: "1", min: 0 },
            {
                id: "climate",
                label: "Climate",
                type: "select",
                options: [
                    { value: "temperate", label: "Temperate" },
                    { value: "hot", label: "Hot/Humid" },
                    { value: "cold", label: "Cold/Dry" }
                ],
                value: "temperate"
            }
        ],
        outputs: [
            { id: "liters", label: "Liters Per Day", format: "number", unit: "L" },
            { id: "cups", label: "Cups Per Day", format: "number", unit: "cups" },
            { id: "bottles", label: "500ml Bottles", format: "number", unit: "bottles" }
        ],
        mainOutput: "liters",
        compute(values) {
            const base = values.weight * 0.033;
            const activityBoost = (values.activityMinutes / 30) * 0.35;
            const climateMultiplier = values.climate === "hot" ? 1.1 : values.climate === "cold" ? 0.9 : 1;
            const liters = (base + activityBoost) * climateMultiplier;
            const cups = liters * 4.227;
            const bottles = liters / 0.5;
            return {
                results: { liters, cups, bottles },
                summary: `Aim for about ${liters.toFixed(2)} liters per day.`,
                formula: "Hydration = weight × 0.033 + activity adjustment"
            };
        },
        seo: {
            title: "Plan Daily Hydration",
            bullets: [
                "Adjust intake for activity and climate.",
                "See liters, cups, and bottle counts.",
                "Stay consistent with hydration goals."
            ]
        }
    },
    "bmr-calculator": {
        title: "BMR Calculator",
        category: "Health",
        icon: "fa-fire",
        tagline: "Estimate basal metabolic rate and daily calories.",
        resultLabel: "BMR",
        description: "Calculate basal metabolic rate and suggested calorie ranges.",
        inputs: [
            {
                id: "gender",
                label: "Gender",
                type: "select",
                options: [
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" }
                ],
                value: "male"
            },
            { id: "age", label: "Age", type: "number", unit: "years", value: 32, step: "1", min: 0 },
            { id: "weight", label: "Weight", type: "number", unit: "kg", value: 75, step: "0.1", min: 0 },
            { id: "height", label: "Height", type: "number", unit: "cm", value: 175, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "bmr", label: "Basal Metabolic Rate", format: "number", unit: "kcal" },
            { id: "sedentary", label: "Sedentary Calories", format: "number", unit: "kcal" },
            { id: "moderate", label: "Moderate Activity Calories", format: "number", unit: "kcal" }
        ],
        mainOutput: "bmr",
        compute(values) {
            const bmr = values.gender === "female"
                ? 10 * values.weight + 6.25 * values.height - 5 * values.age - 161
                : 10 * values.weight + 6.25 * values.height - 5 * values.age + 5;
            const sedentary = bmr * 1.2;
            const moderate = bmr * 1.55;
            return {
                results: { bmr, sedentary, moderate },
                summary: `Your baseline energy burn is about ${Math.round(bmr)} kcal/day.`,
                formula: "Mifflin-St Jeor BMR equation"
            };
        },
        seo: {
            title: "Estimate Daily Energy Needs",
            bullets: [
                "Calculate basal metabolic rate accurately.",
                "See calorie needs by activity level.",
                "Use results to set nutrition targets."
            ]
        }
    },
    "tdee-calculator": {
        title: "TDEE Calculator",
        category: "Health",
        icon: "fa-heart-pulse",
        tagline: "Estimate total daily calorie expenditure.",
        resultLabel: "TDEE",
        description: "Calculate total daily energy expenditure using activity factors.",
        inputs: [
            { id: "bmr", label: "Basal Metabolic Rate", type: "number", unit: "kcal", value: 1650, step: "1", min: 0 },
            {
                id: "activityFactor",
                label: "Activity Level",
                type: "select",
                options: [
                    { value: "1.2", label: "Sedentary (1.2)" },
                    { value: "1.375", label: "Light (1.375)" },
                    { value: "1.55", label: "Moderate (1.55)" },
                    { value: "1.725", label: "Active (1.725)" },
                    { value: "1.9", label: "Very Active (1.9)" }
                ],
                value: "1.55"
            }
        ],
        outputs: [
            { id: "tdee", label: "TDEE", format: "number", unit: "kcal" },
            { id: "cutCalories", label: "Cutting Calories", format: "number", unit: "kcal" },
            { id: "bulkCalories", label: "Bulking Calories", format: "number", unit: "kcal" }
        ],
        mainOutput: "tdee",
        compute(values) {
            const factor = Number(values.activityFactor);
            const tdee = values.bmr * factor;
            const cutCalories = tdee - 500;
            const bulkCalories = tdee + 300;
            return {
                results: { tdee, cutCalories, bulkCalories },
                summary: `Your daily calorie burn is roughly ${Math.round(tdee)} kcal.`,
                formula: "TDEE = BMR × Activity Factor"
            };
        },
        seo: {
            title: "Dial In Daily Calorie Targets",
            bullets: [
                "Estimate calories burned each day.",
                "Plan cutting and bulking targets.",
                "Use activity multipliers for precision."
            ]
        }
    },
    "heart-rate-zones": {
        title: "Heart Rate Zone Calculator",
        category: "Health",
        icon: "fa-heart",
        tagline: "Find training zones based on age and resting heart rate.",
        resultLabel: "Max Heart Rate",
        description: "Calculate heart rate zones using the Karvonen method.",
        inputs: [
            { id: "age", label: "Age", type: "number", unit: "years", value: 30, step: "1", min: 0 },
            { id: "restingHr", label: "Resting Heart Rate", type: "number", unit: "bpm", value: 65, step: "1", min: 0 }
        ],
        outputs: [
            { id: "maxHr", label: "Max HR", format: "number", unit: "bpm" },
            { id: "zone1", label: "Zone 1 (50–60%)", format: "text" },
            { id: "zone2", label: "Zone 2 (60–70%)", format: "text" },
            { id: "zone3", label: "Zone 3 (70–80%)", format: "text" },
            { id: "zone4", label: "Zone 4 (80–90%)", format: "text" },
            { id: "zone5", label: "Zone 5 (90–100%)", format: "text" }
        ],
        mainOutput: "maxHr",
        compute(values) {
            const maxHr = 220 - values.age;
            const reserve = maxHr - values.restingHr;
            const zone = (low, high) => {
                const min = Math.round(reserve * low + values.restingHr);
                const max = Math.round(reserve * high + values.restingHr);
                return `${min}–${max} bpm`;
            };
            return {
                results: {
                    maxHr,
                    zone1: zone(0.5, 0.6),
                    zone2: zone(0.6, 0.7),
                    zone3: zone(0.7, 0.8),
                    zone4: zone(0.8, 0.9),
                    zone5: zone(0.9, 1.0)
                },
                summary: `Target training zones are based on a max HR of ${maxHr} bpm.`,
                formula: "Target HR = (Max − Resting) × % + Resting"
            };
        },
        seo: {
            title: "Train Smarter With HR Zones",
            bullets: [
                "Calculate personalized cardio zones.",
                "Use resting heart rate for accuracy.",
                "Optimize endurance and intensity workouts."
            ]
        }
    },
    "waist-hip-ratio": {
        title: "Waist-to-Hip Ratio Calculator",
        category: "Health",
        icon: "fa-people-group",
        tagline: "Assess body shape using waist-to-hip ratio.",
        resultLabel: "WHR",
        description: "Calculate waist-to-hip ratio and health risk category.",
        inputs: [
            {
                id: "gender",
                label: "Gender",
                type: "select",
                options: [
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" }
                ],
                value: "male"
            },
            { id: "waist", label: "Waist Circumference", type: "number", unit: "cm", value: 85, step: "0.1", min: 0 },
            { id: "hip", label: "Hip Circumference", type: "number", unit: "cm", value: 95, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "ratio", label: "Waist-to-Hip Ratio", format: "number" },
            { id: "risk", label: "Risk Category", format: "text" }
        ],
        mainOutput: "ratio",
        compute(values) {
            const ratio = values.hip === 0 ? 0 : values.waist / values.hip;
            let risk = "Low";
            if (values.gender === "male") {
                if (ratio >= 1.0) risk = "High";
                else if (ratio >= 0.9) risk = "Moderate";
            } else {
                if (ratio >= 0.85) risk = "High";
                else if (ratio >= 0.8) risk = "Moderate";
            }
            return {
                results: { ratio, risk },
                summary: `Your waist-to-hip ratio is ${ratio.toFixed(2)} (${risk} risk).`,
                formula: "WHR = Waist ÷ Hip"
            };
        },
        seo: {
            title: "Understand Body Shape Risk",
            bullets: [
                "Compare waist and hip measurements.",
                "See risk category for men and women.",
                "Track changes over time."
            ]
        }
    },
    "body-surface-area": {
        title: "Body Surface Area Calculator",
        category: "Health",
        icon: "fa-person",
        tagline: "Estimate body surface area with height and weight.",
        resultLabel: "BSA",
        description: "Calculate body surface area using the Mosteller formula.",
        inputs: [
            { id: "weight", label: "Weight", type: "number", unit: "kg", value: 70, step: "0.1", min: 0 },
            { id: "height", label: "Height", type: "number", unit: "cm", value: 170, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "bsa", label: "Body Surface Area", format: "number", unit: "m²" },
            { id: "bsaRatio", label: "BSA vs 1.73m²", format: "percent" }
        ],
        mainOutput: "bsa",
        compute(values) {
            const bsa = Math.sqrt((values.height * values.weight) / 3600);
            const bsaRatio = bsa / 1.73;
            return {
                results: { bsa, bsaRatio },
                summary: `Body surface area is approximately ${bsa.toFixed(2)} m².`,
                formula: "Mosteller: BSA = √(height × weight / 3600)"
            };
        },
        seo: {
            title: "Calculate Body Surface Area",
            bullets: [
                "Useful for medication dosing.",
                "Simple Mosteller formula.",
                "Track normalized values with ease."
            ]
        }
    },
    "one-rep-max": {
        title: "One Rep Max Calculator",
        category: "Health",
        icon: "fa-dumbbell",
        tagline: "Estimate your one-rep max for strength training.",
        resultLabel: "Estimated 1RM",
        description: "Calculate one-rep max and training weights.",
        inputs: [
            { id: "weight", label: "Weight Lifted", type: "number", unit: "kg", value: 60, step: "0.1", min: 0 },
            { id: "reps", label: "Repetitions", type: "number", unit: "reps", value: 8, step: "1", min: 1 }
        ],
        outputs: [
            { id: "oneRm", label: "Estimated 1RM", format: "number", unit: "kg" },
            { id: "strength85", label: "85% Training Weight", format: "number", unit: "kg" },
            { id: "endurance70", label: "70% Training Weight", format: "number", unit: "kg" }
        ],
        mainOutput: "oneRm",
        compute(values) {
            const oneRm = values.weight * (1 + values.reps / 30);
            const strength85 = oneRm * 0.85;
            const endurance70 = oneRm * 0.7;
            return {
                results: { oneRm, strength85, endurance70 },
                summary: `Your estimated 1RM is ${oneRm.toFixed(1)} kg.`,
                formula: "Epley: 1RM = weight × (1 + reps/30)"
            };
        },
        seo: {
            title: "Estimate Strength Potential",
            bullets: [
                "Convert multi-rep sets into a 1RM estimate.",
                "Plan training intensities with ease.",
                "Track progress over time."
            ]
        }
    },
    "macro-calculator": {
        title: "Macro Calculator",
        category: "Health",
        icon: "fa-bowl-food",
        tagline: "Convert calories into protein, carbs, and fat grams.",
        resultLabel: "Daily Protein",
        description: "Calculate macro grams from daily calorie targets.",
        inputs: [
            { id: "calories", label: "Daily Calories", type: "number", unit: "kcal", value: 2200, step: "1", min: 0 },
            { id: "proteinPercent", label: "Protein %", type: "number", unit: "%", value: 30, step: "1", min: 0 },
            { id: "carbPercent", label: "Carbs %", type: "number", unit: "%", value: 40, step: "1", min: 0 },
            { id: "fatPercent", label: "Fat %", type: "number", unit: "%", value: 30, step: "1", min: 0 }
        ],
        outputs: [
            { id: "proteinGrams", label: "Protein", format: "number", unit: "g" },
            { id: "carbGrams", label: "Carbs", format: "number", unit: "g" },
            { id: "fatGrams", label: "Fat", format: "number", unit: "g" }
        ],
        mainOutput: "proteinGrams",
        compute(values) {
            const proteinCalories = values.calories * (values.proteinPercent / 100);
            const carbCalories = values.calories * (values.carbPercent / 100);
            const fatCalories = values.calories * (values.fatPercent / 100);
            const proteinGrams = proteinCalories / 4;
            const carbGrams = carbCalories / 4;
            const fatGrams = fatCalories / 9;
            return {
                results: { proteinGrams, carbGrams, fatGrams },
                summary: `Protein target is about ${proteinGrams.toFixed(0)} g per day.`,
                formula: "Protein/Carbs = calories ÷ 4, Fat = calories ÷ 9"
            };
        },
        seo: {
            title: "Customize Macronutrient Targets",
            bullets: [
                "Translate calorie goals into grams.",
                "Adjust macro split instantly.",
                "Support cutting or bulking plans."
            ]
        }
    },
    "calorie-burn": {
        title: "Calorie Burn Calculator",
        category: "Health",
        icon: "fa-person-running",
        tagline: "Estimate calories burned from activity intensity.",
        resultLabel: "Calories Burned",
        description: "Calculate calories burned using MET values and duration.",
        inputs: [
            { id: "weight", label: "Weight", type: "number", unit: "kg", value: 70, step: "0.1", min: 0 },
            { id: "met", label: "Activity MET", type: "number", unit: "MET", value: 6, step: "0.1", min: 0 },
            { id: "duration", label: "Duration", type: "number", unit: "minutes", value: 45, step: "1", min: 0 }
        ],
        outputs: [
            { id: "calories", label: "Calories Burned", format: "number", unit: "kcal" },
            { id: "hourlyBurn", label: "Calories per Hour", format: "number", unit: "kcal" }
        ],
        mainOutput: "calories",
        compute(values) {
            const calories = values.met * 3.5 * values.weight / 200 * values.duration;
            const hourlyBurn = values.met * 3.5 * values.weight / 200 * 60;
            return {
                results: { calories, hourlyBurn },
                summary: `You burn about ${Math.round(calories)} kcal in ${values.duration} minutes.`,
                formula: "Calories = MET × 3.5 × weight / 200 × minutes"
            };
        },
        seo: {
            title: "Estimate Workout Calorie Burn",
            bullets: [
                "Use MET values for accuracy.",
                "Adjust duration or intensity.",
                "Track calories burned per hour."
            ]
        }
    },
    "date-difference": {
        title: "Date Difference Calculator",
        category: "Everyday Life",
        icon: "fa-calendar-days",
        tagline: "Calculate days, weeks, and months between dates.",
        resultLabel: "Total Days",
        description: "Find the exact time difference between two calendar dates.",
        inputs: [
            { id: "startDate", label: "Start Date", type: "date", value: "" },
            { id: "endDate", label: "End Date", type: "date", value: "" }
        ],
        outputs: [
            { id: "totalDays", label: "Total Days", format: "number" },
            { id: "totalWeeks", label: "Total Weeks", format: "number" },
            { id: "totalMonths", label: "Total Months", format: "number" },
            { id: "totalYears", label: "Total Years", format: "number" }
        ],
        mainOutput: "totalDays",
        compute(values) {
            if (!values.startDate || !values.endDate) {
                return { results: { totalDays: 0, totalWeeks: 0, totalMonths: 0, totalYears: 0 }, summary: "Select two dates to compare.", formula: "Difference = End Date − Start Date" };
            }
            const start = new Date(values.startDate);
            const end = new Date(values.endDate);
            const diffMs = end - start;
            const totalDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
            const totalWeeks = totalDays / 7;
            const totalMonths = totalDays / 30.4375;
            const totalYears = totalDays / 365.25;
            return {
                results: { totalDays, totalWeeks, totalMonths, totalYears },
                summary: `There are ${totalDays} days between the selected dates.`,
                formula: "Days = (End − Start) ÷ (24×60×60×1000)"
            };
        },
        seo: {
            title: "Track Time Between Dates",
            bullets: [
                "See differences in days, weeks, and months.",
                "Ideal for planning events and milestones.",
                "Works with any calendar dates."
            ]
        }
    },
    "time-duration": {
        title: "Time Duration Calculator",
        category: "Everyday Life",
        icon: "fa-hourglass-half",
        tagline: "Calculate hours and minutes between two times.",
        resultLabel: "Total Hours",
        description: "Find the duration between start and end times, even overnight.",
        inputs: [
            { id: "startTime", label: "Start Time", type: "time", value: "08:00" },
            { id: "endTime", label: "End Time", type: "time", value: "17:00" }
        ],
        outputs: [
            { id: "totalHours", label: "Total Hours", format: "number" },
            { id: "totalMinutes", label: "Total Minutes", format: "number" }
        ],
        mainOutput: "totalHours",
        compute(values) {
            if (!values.startTime || !values.endTime) {
                return { results: { totalHours: 0, totalMinutes: 0 }, summary: "Select both start and end times.", formula: "Duration = End Time − Start Time" };
            }
            const start = SimpleCalculator.timeToMinutes(values.startTime);
            const end = SimpleCalculator.timeToMinutes(values.endTime);
            let diff = end - start;
            if (diff < 0) diff += 24 * 60;
            const totalHours = diff / 60;
            return {
                results: { totalHours, totalMinutes: diff },
                summary: `Total duration is ${totalHours.toFixed(2)} hours.`,
                formula: "If end is before start, time crosses midnight."
            };
        },
        seo: {
            title: "Measure Time Durations",
            bullets: [
                "Handles overnight time spans.",
                "Convert time differences to minutes.",
                "Great for scheduling and shifts."
            ]
        }
    },
    "fuel-cost": {
        title: "Fuel Cost Calculator",
        category: "Everyday Life",
        icon: "fa-gas-pump",
        tagline: "Estimate trip fuel cost and consumption.",
        resultLabel: "Trip Cost",
        description: "Calculate fuel cost based on distance, fuel economy, and price.",
        inputs: [
            { id: "distance", label: "Trip Distance", type: "number", unit: "miles", value: 240, step: "0.1", min: 0 },
            { id: "fuelEconomy", label: "Fuel Economy", type: "number", unit: "mpg", value: 28, step: "0.1", min: 0 },
            { id: "pricePerGallon", label: "Fuel Price", type: "number", unit: "$", value: 3.8, step: "0.01", min: 0 }
        ],
        outputs: [
            { id: "fuelUsed", label: "Fuel Used", format: "number", unit: "gallons" },
            { id: "tripCost", label: "Trip Cost", format: "currency" },
            { id: "costPerMile", label: "Cost Per Mile", format: "currency" }
        ],
        mainOutput: "tripCost",
        compute(values) {
            const fuelUsed = values.fuelEconomy === 0 ? 0 : values.distance / values.fuelEconomy;
            const tripCost = fuelUsed * values.pricePerGallon;
            const costPerMile = values.distance === 0 ? 0 : tripCost / values.distance;
            return {
                results: { fuelUsed, tripCost, costPerMile },
                summary: `Fuel cost for the trip is about $${tripCost.toFixed(2)}.`,
                formula: "Cost = Distance ÷ MPG × Price per Gallon"
            };
        },
        seo: {
            title: "Plan Travel Fuel Costs",
            bullets: [
                "Estimate gallons needed for any trip.",
                "Compare costs for different mpg values.",
                "Budget road trips accurately."
            ]
        }
    },
    "tip-calculator": {
        title: "Tip Calculator",
        category: "Everyday Life",
        icon: "fa-receipt",
        tagline: "Split tips and totals with ease.",
        resultLabel: "Tip Amount",
        description: "Calculate tips, totals, and per-person costs.",
        inputs: [
            { id: "billTotal", label: "Bill Total", type: "number", unit: "$", value: 68.5, step: "0.01", min: 0 },
            { id: "tipPercent", label: "Tip Percentage", type: "number", unit: "%", value: 18, step: "0.1", min: 0 },
            { id: "people", label: "Number of People", type: "number", unit: "people", value: 2, step: "1", min: 1 }
        ],
        outputs: [
            { id: "tipAmount", label: "Tip Amount", format: "currency" },
            { id: "totalWithTip", label: "Total with Tip", format: "currency" },
            { id: "perPerson", label: "Per Person", format: "currency" }
        ],
        mainOutput: "tipAmount",
        compute(values) {
            const tipAmount = values.billTotal * (values.tipPercent / 100);
            const totalWithTip = values.billTotal + tipAmount;
            const perPerson = values.people === 0 ? 0 : totalWithTip / values.people;
            return {
                results: { tipAmount, totalWithTip, perPerson },
                summary: `Each person pays about $${perPerson.toFixed(2)} including tip.`,
                formula: "Tip = Bill × Tip %"
            };
        },
        seo: {
            title: "Split Bills and Tips Easily",
            bullets: [
                "Calculate tips instantly.",
                "Split totals between diners.",
                "Adjust tip percentage on the fly."
            ]
        }
    },
    "discount-calculator": {
        title: "Discount Calculator",
        category: "Everyday Life",
        icon: "fa-tags",
        tagline: "See savings after discounts and tax.",
        resultLabel: "Final Price",
        description: "Calculate final price after discounts and taxes.",
        inputs: [
            { id: "originalPrice", label: "Original Price", type: "number", unit: "$", value: 120, step: "0.01", min: 0 },
            { id: "discountPercent", label: "Discount %", type: "number", unit: "%", value: 20, step: "0.1", min: 0 },
            { id: "taxPercent", label: "Sales Tax %", type: "number", unit: "%", value: 7.5, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "discountAmount", label: "Discount Amount", format: "currency" },
            { id: "finalPrice", label: "Final Price", format: "currency" },
            { id: "totalSavings", label: "Total Savings", format: "currency" }
        ],
        mainOutput: "finalPrice",
        compute(values) {
            const discountAmount = values.originalPrice * (values.discountPercent / 100);
            const discounted = values.originalPrice - discountAmount;
            const taxAmount = discounted * (values.taxPercent / 100);
            const finalPrice = discounted + taxAmount;
            const totalSavings = values.originalPrice - finalPrice;
            return {
                results: { discountAmount, finalPrice, totalSavings },
                summary: `You save $${totalSavings.toFixed(2)} after discount and tax.`,
                formula: "Final = (Price − Discount) × (1 + Tax)"
            };
        },
        seo: {
            title: "Calculate Real Discount Savings",
            bullets: [
                "Include sales tax in the final price.",
                "See true savings after discounts.",
                "Compare deals in seconds."
            ]
        }
    },
    "percentage-calculator": {
        title: "Percentage Calculator",
        category: "Everyday Life",
        icon: "fa-percent",
        tagline: "Find percentage values and totals quickly.",
        resultLabel: "Percentage Value",
        description: "Calculate percentage amounts and totals.",
        inputs: [
            { id: "baseValue", label: "Base Value", type: "number", unit: "", value: 250, step: "0.01", min: 0 },
            { id: "percent", label: "Percentage", type: "number", unit: "%", value: 15, step: "0.1", min: 0 }
        ],
        outputs: [
            { id: "percentValue", label: "Percentage Value", format: "number" },
            { id: "totalWithPercent", label: "Total (Base + %)", format: "number" },
            { id: "percentOfTotal", label: "Percent of Total", format: "percent" }
        ],
        mainOutput: "percentValue",
        compute(values) {
            const percentValue = values.baseValue * (values.percent / 100);
            const totalWithPercent = values.baseValue + percentValue;
            const percentOfTotal = totalWithPercent === 0 ? 0 : percentValue / totalWithPercent;
            return {
                results: { percentValue, totalWithPercent, percentOfTotal },
                summary: `${values.percent}% of ${values.baseValue} equals ${percentValue.toFixed(2)}.`,
                formula: "Percentage Value = Base × (Percent ÷ 100)"
            };
        },
        seo: {
            title: "Solve Percentage Problems",
            bullets: [
                "Compute percent values instantly.",
                "Add percentage to totals.",
                "Useful for markups and growth."
            ]
        }
    },
    "bill-splitter": {
        title: "Bill Splitter",
        category: "Everyday Life",
        icon: "fa-people-arrows",
        tagline: "Split bills, tax, and tip evenly.",
        resultLabel: "Per Person",
        description: "Calculate per-person cost including tax and tip.",
        inputs: [
            { id: "billAmount", label: "Bill Amount", type: "number", unit: "$", value: 120, step: "0.01", min: 0 },
            { id: "taxPercent", label: "Tax %", type: "number", unit: "%", value: 7.5, step: "0.1", min: 0 },
            { id: "tipPercent", label: "Tip %", type: "number", unit: "%", value: 18, step: "0.1", min: 0 },
            { id: "people", label: "People", type: "number", unit: "people", value: 3, step: "1", min: 1 }
        ],
        outputs: [
            { id: "totalBill", label: "Total Bill", format: "currency" },
            { id: "tipAmount", label: "Tip Amount", format: "currency" },
            { id: "perPerson", label: "Per Person", format: "currency" }
        ],
        mainOutput: "perPerson",
        compute(values) {
            const taxAmount = values.billAmount * (values.taxPercent / 100);
            const tipAmount = values.billAmount * (values.tipPercent / 100);
            const totalBill = values.billAmount + taxAmount + tipAmount;
            const perPerson = values.people === 0 ? 0 : totalBill / values.people;
            return {
                results: { totalBill, tipAmount, perPerson },
                summary: `Each person owes about $${perPerson.toFixed(2)}.`,
                formula: "Total = Bill + Tax + Tip"
            };
        },
        seo: {
            title: "Split Group Bills Fairly",
            bullets: [
                "Include tax and tip in the split.",
                "Handle any group size.",
                "Quick totals for dining out."
            ]
        }
    },
    "commute-cost": {
        title: "Commute Cost Calculator",
        category: "Everyday Life",
        icon: "fa-road",
        tagline: "Estimate monthly commuting fuel costs.",
        resultLabel: "Monthly Cost",
        description: "Calculate monthly commuting costs based on distance and fuel.",
        inputs: [
            { id: "distancePerDay", label: "Daily Distance", type: "number", unit: "miles", value: 24, step: "0.1", min: 0 },
            { id: "daysPerMonth", label: "Commute Days", type: "number", unit: "days", value: 20, step: "1", min: 0 },
            { id: "fuelEconomy", label: "Fuel Economy", type: "number", unit: "mpg", value: 30, step: "0.1", min: 0 },
            { id: "pricePerGallon", label: "Fuel Price", type: "number", unit: "$", value: 3.7, step: "0.01", min: 0 }
        ],
        outputs: [
            { id: "monthlyFuel", label: "Monthly Fuel Used", format: "number", unit: "gallons" },
            { id: "monthlyCost", label: "Monthly Cost", format: "currency" },
            { id: "yearlyCost", label: "Yearly Cost", format: "currency" }
        ],
        mainOutput: "monthlyCost",
        compute(values) {
            const monthlyMiles = values.distancePerDay * values.daysPerMonth;
            const monthlyFuel = values.fuelEconomy === 0 ? 0 : monthlyMiles / values.fuelEconomy;
            const monthlyCost = monthlyFuel * values.pricePerGallon;
            const yearlyCost = monthlyCost * 12;
            return {
                results: { monthlyFuel, monthlyCost, yearlyCost },
                summary: `Commuting costs about $${monthlyCost.toFixed(2)} per month.`,
                formula: "Monthly Cost = (Miles ÷ MPG) × Price"
            };
        },
        seo: {
            title: "Track Commuting Expenses",
            bullets: [
                "Estimate monthly and yearly fuel cost.",
                "Use for budgeting transportation.",
                "Compare changes in fuel prices."
            ]
        }
    },
    "recipe-scaler": {
        title: "Recipe Scaler",
        category: "Everyday Life",
        icon: "fa-utensils",
        tagline: "Scale recipes up or down instantly.",
        resultLabel: "Scale Factor",
        description: "Calculate recipe scale factor for new serving sizes.",
        inputs: [
            { id: "originalServings", label: "Original Servings", type: "number", unit: "servings", value: 4, step: "1", min: 1 },
            { id: "desiredServings", label: "Desired Servings", type: "number", unit: "servings", value: 6, step: "1", min: 1 }
        ],
        outputs: [
            { id: "scaleFactor", label: "Scale Factor", format: "number" },
            { id: "percentChange", label: "Percent Change", format: "percent" },
            { id: "adjustedServings", label: "Adjusted Servings", format: "number" }
        ],
        mainOutput: "scaleFactor",
        compute(values) {
            const scaleFactor = values.desiredServings / values.originalServings;
            const percentChange = (scaleFactor - 1);
            return {
                results: { scaleFactor, percentChange, adjustedServings: values.desiredServings },
                summary: `Multiply ingredients by ${scaleFactor.toFixed(2)} to scale the recipe.`,
                formula: "Scale Factor = Desired Servings ÷ Original Servings"
            };
        },
        seo: {
            title: "Resize Recipes Effortlessly",
            bullets: [
                "Scale ingredients for any serving size.",
                "Get precise percentage adjustments.",
                "Great for meal prep planning."
            ]
        }
    },
    "sleep-calculator": {
        title: "Sleep Calculator",
        category: "Everyday Life",
        icon: "fa-bed",
        tagline: "Plan bedtimes around sleep cycles.",
        resultLabel: "Ideal Bedtime",
        description: "Calculate bedtime based on wake time and sleep cycles.",
        inputs: [
            { id: "wakeTime", label: "Wake Time", type: "time", value: "07:00" },
            {
                id: "cycles",
                label: "Sleep Cycles",
                type: "select",
                options: [
                    { value: "4", label: "4 cycles (6 hrs)" },
                    { value: "5", label: "5 cycles (7.5 hrs)" },
                    { value: "6", label: "6 cycles (9 hrs)" }
                ],
                value: "5"
            },
            { id: "fallAsleep", label: "Fall Asleep Time", type: "number", unit: "minutes", value: 15, step: "1", min: 0 }
        ],
        outputs: [
            { id: "bedtime", label: "Bedtime", format: "text" },
            { id: "sleepHours", label: "Total Sleep", format: "number", unit: "hours" }
        ],
        mainOutput: "bedtime",
        compute(values) {
            if (!values.wakeTime) {
                return { results: { bedtime: "--", sleepHours: 0 }, summary: "Choose a wake time.", formula: "Bedtime = Wake Time − Sleep Cycles" };
            }
            const wakeMinutes = SimpleCalculator.timeToMinutes(values.wakeTime);
            const sleepMinutes = Number(values.cycles) * 90 + values.fallAsleep;
            let bedtimeMinutes = wakeMinutes - sleepMinutes;
            if (bedtimeMinutes < 0) bedtimeMinutes += 24 * 60;
            const bedtime = SimpleCalculator.minutesToTime(bedtimeMinutes);
            return {
                results: { bedtime, sleepHours: sleepMinutes / 60 },
                summary: `Plan to be in bed by ${bedtime}.`,
                formula: "Each sleep cycle is ~90 minutes."
            };
        },
        seo: {
            title: "Plan Better Sleep Schedules",
            bullets: [
                "Align bedtime with sleep cycles.",
                "Include time to fall asleep.",
                "Wake up feeling more refreshed."
            ]
        }
    },
    "work-hours-calculator": {
        title: "Work Hours Calculator",
        category: "Everyday Life",
        icon: "fa-briefcase",
        tagline: "Calculate daily and weekly work hours.",
        resultLabel: "Daily Hours",
        description: "Compute work hours with break time included.",
        inputs: [
            { id: "startTime", label: "Start Time", type: "time", value: "09:00" },
            { id: "endTime", label: "End Time", type: "time", value: "17:30" },
            { id: "breakMinutes", label: "Break Time", type: "number", unit: "minutes", value: 30, step: "1", min: 0 }
        ],
        outputs: [
            { id: "dailyHours", label: "Daily Hours", format: "number", unit: "hours" },
            { id: "weeklyHours", label: "Weekly Hours", format: "number", unit: "hours" },
            { id: "monthlyHours", label: "Monthly Hours", format: "number", unit: "hours" }
        ],
        mainOutput: "dailyHours",
        compute(values) {
            if (!values.startTime || !values.endTime) {
                return { results: { dailyHours: 0, weeklyHours: 0, monthlyHours: 0 }, summary: "Enter your work schedule.", formula: "Work Hours = End − Start − Breaks" };
            }
            const start = SimpleCalculator.timeToMinutes(values.startTime);
            const end = SimpleCalculator.timeToMinutes(values.endTime);
            let diff = end - start;
            if (diff < 0) diff += 24 * 60;
            diff = Math.max(diff - values.breakMinutes, 0);
            const dailyHours = diff / 60;
            const weeklyHours = dailyHours * 5;
            const monthlyHours = dailyHours * 4.33;
            return {
                results: { dailyHours, weeklyHours, monthlyHours },
                summary: `You work about ${dailyHours.toFixed(2)} hours per day.`,
                formula: "Hours = (End − Start − Break) ÷ 60"
            };
        },
        seo: {
            title: "Track Work Hours Easily",
            bullets: [
                "Account for breaks automatically.",
                "Estimate weekly and monthly totals.",
                "Ideal for payroll planning."
            ]
        }
    },
    "day-of-week-calculator": {
        title: "Day of Week Calculator",
        category: "Everyday Life",
        icon: "fa-calendar",
        tagline: "Find the weekday for any date.",
        resultLabel: "Day of Week",
        description: "Discover the day of the week and ISO week number.",
        inputs: [
            { id: "targetDate", label: "Date", type: "date", value: "" }
        ],
        outputs: [
            { id: "dayName", label: "Day of Week", format: "text" },
            { id: "weekNumber", label: "ISO Week", format: "number" }
        ],
        mainOutput: "dayName",
        compute(values) {
            if (!values.targetDate) {
                return { results: { dayName: "--", weekNumber: 0 }, summary: "Pick a date to see its weekday.", formula: "Weekday uses ISO calendar logic." };
            }
            const date = new Date(values.targetDate);
            const dayName = date.toLocaleDateString(undefined, { weekday: "long" });
            const weekNumber = SimpleCalculator.getIsoWeek(date);
            return {
                results: { dayName, weekNumber },
                summary: `${dayName} is ISO week ${weekNumber}.`,
                formula: "ISO Week = week number in ISO-8601 standard"
            };
        },
        seo: {
            title: "Identify Weekdays Quickly",
            bullets: [
                "Find weekdays for past or future dates.",
                "Includes ISO week numbers.",
                "Great for scheduling and planning."
            ]
        }
    },
    "weight": {
        title: "Weight Converter",
        category: "Converters",
        icon: "fa-weight-hanging",
        tagline: "Convert kilograms, pounds, ounces, and more.",
        resultLabel: "Converted Value",
        description: "Convert weights between metric and imperial units.",
        type: "converter",
        units: {
            kg: { label: "Kilogram (kg)", toBase: 1 },
            g: { label: "Gram (g)", toBase: 0.001 },
            lb: { label: "Pound (lb)", toBase: 0.45359237 },
            oz: { label: "Ounce (oz)", toBase: 0.0283495 },
            st: { label: "Stone (st)", toBase: 6.35029 },
            tonne: { label: "Metric Ton", toBase: 1000 }
        },
        quickUnits: ["kg", "lb", "oz", "g"],
        seo: {
            title: "Convert Weight Units",
            bullets: [
                "Switch between metric and imperial units.",
                "Quick reference conversions included.",
                "Ideal for fitness and shipping."
            ]
        }
    },
    "temperature": {
        title: "Temperature Converter",
        category: "Converters",
        icon: "fa-temperature-half",
        tagline: "Convert Celsius, Fahrenheit, and Kelvin instantly.",
        resultLabel: "Converted Temperature",
        description: "Convert temperatures across Celsius, Fahrenheit, and Kelvin.",
        type: "temperature",
        units: {
            c: { label: "Celsius (°C)" },
            f: { label: "Fahrenheit (°F)" },
            k: { label: "Kelvin (K)" }
        },
        quickUnits: ["c", "f", "k"],
        seo: {
            title: "Convert Temperatures Easily",
            bullets: [
                "Switch between Celsius, Fahrenheit, and Kelvin.",
                "See exact formula results.",
                "Great for cooking or science."
            ]
        }
    },
    "area-converter": {
        title: "Area Converter",
        category: "Converters",
        icon: "fa-border-all",
        tagline: "Convert square meters, acres, and more.",
        resultLabel: "Converted Area",
        description: "Convert area measurements between metric and imperial units.",
        type: "converter",
        units: {
            sqm: { label: "Square Meter (m²)", toBase: 1 },
            sqkm: { label: "Square Kilometer (km²)", toBase: 1_000_000 },
            sqft: { label: "Square Foot (ft²)", toBase: 0.092903 },
            sqyd: { label: "Square Yard (yd²)", toBase: 0.836127 },
            acre: { label: "Acre", toBase: 4046.86 },
            hectare: { label: "Hectare", toBase: 10000 }
        },
        quickUnits: ["sqm", "sqft", "acre", "hectare"],
        seo: {
            title: "Convert Land and Area Sizes",
            bullets: [
                "Compare square meters, acres, and hectares.",
                "Useful for real estate and land planning.",
                "Instant conversions between units."
            ]
        }
    },
    "volume-converter": {
        title: "Volume Converter",
        category: "Converters",
        icon: "fa-cube",
        tagline: "Convert liters, gallons, cups, and more.",
        resultLabel: "Converted Volume",
        description: "Convert volume and capacity measurements.",
        type: "converter",
        units: {
            l: { label: "Liter (L)", toBase: 1 },
            ml: { label: "Milliliter (mL)", toBase: 0.001 },
            gal: { label: "Gallon (US)", toBase: 3.78541 },
            qt: { label: "Quart (US)", toBase: 0.946353 },
            pt: { label: "Pint (US)", toBase: 0.473176 },
            cup: { label: "Cup", toBase: 0.236588 }
        },
        quickUnits: ["l", "gal", "qt", "cup"],
        seo: {
            title: "Convert Volume Measurements",
            bullets: [
                "Switch between liters, gallons, and cups.",
                "Ideal for recipes and fuel volumes.",
                "Supports common US units."
            ]
        }
    },
    "speed-converter": {
        title: "Speed Converter",
        category: "Converters",
        icon: "fa-gauge-high",
        tagline: "Convert mph, km/h, knots, and more.",
        resultLabel: "Converted Speed",
        description: "Convert speed units for driving, aviation, and sports.",
        type: "converter",
        units: {
            kph: { label: "Kilometers/hour", toBase: 1 },
            mph: { label: "Miles/hour", toBase: 1.60934 },
            ms: { label: "Meters/second", toBase: 3.6 },
            knot: { label: "Knot", toBase: 1.852 },
            fps: { label: "Feet/second", toBase: 1.09728 }
        },
        quickUnits: ["kph", "mph", "ms", "knot"],
        seo: {
            title: "Convert Speed Units",
            bullets: [
                "Compare mph, km/h, and knots.",
                "Useful for travel and fitness.",
                "Instant accurate conversions."
            ]
        }
    },
    "time-converter": {
        title: "Time Converter",
        category: "Converters",
        icon: "fa-clock",
        tagline: "Convert minutes, hours, days, and weeks.",
        resultLabel: "Converted Time",
        description: "Convert time units for schedules and planning.",
        type: "converter",
        units: {
            sec: { label: "Second", toBase: 1 },
            min: { label: "Minute", toBase: 60 },
            hr: { label: "Hour", toBase: 3600 },
            day: { label: "Day", toBase: 86400 },
            week: { label: "Week", toBase: 604800 }
        },
        quickUnits: ["sec", "min", "hr", "day"],
        seo: {
            title: "Convert Time Units",
            bullets: [
                "Convert between seconds, minutes, and hours.",
                "Great for scheduling and productivity.",
                "Instant results in any unit."
            ]
        }
    },
    "energy-converter": {
        title: "Energy Converter",
        category: "Converters",
        icon: "fa-bolt",
        tagline: "Convert joules, calories, and kilowatt-hours.",
        resultLabel: "Converted Energy",
        description: "Convert energy units for nutrition and engineering.",
        type: "converter",
        units: {
            j: { label: "Joule (J)", toBase: 1 },
            kj: { label: "Kilojoule (kJ)", toBase: 1000 },
            cal: { label: "Calorie (cal)", toBase: 4.184 },
            kcal: { label: "Kilocalorie (kcal)", toBase: 4184 },
            kwh: { label: "Kilowatt-hour (kWh)", toBase: 3_600_000 }
        },
        quickUnits: ["j", "kj", "kcal", "kwh"],
        seo: {
            title: "Convert Energy Units",
            bullets: [
                "Switch between joules and calories.",
                "Supports kilowatt-hours for electricity.",
                "Useful for nutrition and engineering."
            ]
        }
    },
    "power-converter": {
        title: "Power Converter",
        category: "Converters",
        icon: "fa-plug",
        tagline: "Convert watts, horsepower, and kilowatts.",
        resultLabel: "Converted Power",
        description: "Convert power units for motors and electricity.",
        type: "converter",
        units: {
            w: { label: "Watt (W)", toBase: 1 },
            kw: { label: "Kilowatt (kW)", toBase: 1000 },
            mw: { label: "Megawatt (MW)", toBase: 1_000_000 },
            hp: { label: "Horsepower", toBase: 745.699 }
        },
        quickUnits: ["w", "kw", "hp", "mw"],
        seo: {
            title: "Convert Power Ratings",
            bullets: [
                "Compare watts, kilowatts, and horsepower.",
                "Useful for appliances and engines.",
                "Instant results with accurate factors."
            ]
        }
    },
    "pressure-converter": {
        title: "Pressure Converter",
        category: "Converters",
        icon: "fa-gauge",
        tagline: "Convert psi, bar, pascal, and more.",
        resultLabel: "Converted Pressure",
        description: "Convert pressure units for tires, weather, and engineering.",
        type: "converter",
        units: {
            pa: { label: "Pascal (Pa)", toBase: 1 },
            kpa: { label: "Kilopascal (kPa)", toBase: 1000 },
            bar: { label: "Bar", toBase: 100000 },
            psi: { label: "PSI", toBase: 6894.76 },
            atm: { label: "Atmosphere", toBase: 101325 }
        },
        quickUnits: ["pa", "kpa", "bar", "psi"],
        seo: {
            title: "Convert Pressure Units",
            bullets: [
                "Switch between psi, bar, and pascals.",
                "Great for tires and weather data.",
                "Accurate engineering conversions."
            ]
        }
    },
    "data-storage-converter": {
        title: "Data Storage Converter",
        category: "Converters",
        icon: "fa-hard-drive",
        tagline: "Convert bytes, MB, GB, and TB.",
        resultLabel: "Converted Storage",
        description: "Convert digital storage units using base-2 (1024) sizes.",
        type: "converter",
        units: {
            b: { label: "Byte", toBase: 1 },
            kb: { label: "Kilobyte", toBase: 1024 },
            mb: { label: "Megabyte", toBase: 1024 ** 2 },
            gb: { label: "Gigabyte", toBase: 1024 ** 3 },
            tb: { label: "Terabyte", toBase: 1024 ** 4 }
        },
        quickUnits: ["b", "kb", "mb", "gb"],
        seo: {
            title: "Convert Digital Storage",
            bullets: [
                "Use binary (1024) conversions.",
                "Compare bytes to gigabytes easily.",
                "Perfect for storage planning."
            ]
        }
    },
    "fuel-economy-converter": {
        title: "Fuel Economy Converter",
        category: "Converters",
        icon: "fa-gas-pump",
        tagline: "Convert mpg to L/100km and vice versa.",
        resultLabel: "Converted Economy",
        description: "Convert fuel economy units between US and metric standards.",
        type: "fuel-economy",
        units: {
            mpg: { label: "Miles per Gallon (US)" },
            kpl: { label: "Kilometers per Liter" },
            l100: { label: "Liters per 100km" }
        },
        quickUnits: ["mpg", "kpl", "l100"],
        seo: {
            title: "Convert Fuel Economy Metrics",
            bullets: [
                "Switch between mpg and L/100km.",
                "Compare international efficiency ratings.",
                "Useful for travel and car shopping."
            ]
        }
    },
    "angle-converter": {
        title: "Angle Converter",
        category: "Converters",
        icon: "fa-compass",
        tagline: "Convert degrees, radians, and grads.",
        resultLabel: "Converted Angle",
        description: "Convert common angle measurements.",
        type: "converter",
        units: {
            deg: { label: "Degree (°)", toBase: 1 },
            rad: { label: "Radian", toBase: 57.2957795 },
            grad: { label: "Grad", toBase: 0.9 },
            turn: { label: "Turn", toBase: 360 }
        },
        quickUnits: ["deg", "rad", "grad"],
        seo: {
            title: "Convert Angle Units",
            bullets: [
                "Switch between degrees and radians.",
                "Great for math and engineering.",
                "Instant, precise conversions."
            ]
        }
    }
};

const SimpleCalculator = {
    init(toolKey) {
        const config = SIMPLE_CALCULATORS[toolKey];
        if (!config) return;
        CalculatorLayout.render({
            title: config.title,
            category: config.category,
            toolId: "tool-slot",
            seoId: "seo-slot"
        });
        this.config = config;
        this.buildInputs(config);
        this.buildSeo(config);
        this.bindEvents(config);
        this.calculate();
    },
    buildInputs(config) {
        const inputContainer = document.getElementById("inputFields");
        if (!inputContainer) return;
        inputContainer.innerHTML = "";
        if (config.type === "converter" || config.type === "temperature" || config.type === "fuel-economy") {
            inputContainer.appendChild(this.createInput({ id: "inputValue", label: "Value", type: "number", unit: "", value: 1, step: "0.01" }));
            const unitRow = document.createElement("div");
            unitRow.className = "grid grid-cols-1 gap-3 sm:grid-cols-2";
            unitRow.appendChild(this.createSelect("fromUnit", "From", config.units));
            unitRow.appendChild(this.createSelect("toUnit", "To", config.units));
            inputContainer.appendChild(unitRow);
        } else {
            config.inputs.forEach((input) => {
                inputContainer.appendChild(this.createInput(input));
            });
        }
    },
    createInput(input) {
        const wrapper = document.createElement("div");
        wrapper.className = "flex flex-col gap-1";
        const label = document.createElement("label");
        label.className = "text-xs font-bold text-slate-700";
        label.setAttribute("for", input.id);
        label.textContent = input.unit ? `${input.label} (${input.unit})` : input.label;
        wrapper.appendChild(label);
        let field;
        if (input.type === "select") {
            field = document.createElement("select");
            field.className = "compact-select w-full h-9 font-medium text-slate-700 text-xs";
            field.id = input.id;
            input.options.forEach((option) => {
                const opt = document.createElement("option");
                opt.value = option.value;
                opt.textContent = option.label;
                if (String(option.value) === String(input.value)) opt.selected = true;
                field.appendChild(opt);
            });
        } else {
            field = document.createElement("input");
            field.type = input.type;
            field.className = "compact-input w-full text-slate-800 h-9";
            field.id = input.id;
            if (input.value !== undefined && input.value !== "") field.value = input.value;
            if (input.min !== undefined) field.min = input.min;
            if (input.max !== undefined) field.max = input.max;
            if (input.step !== undefined) field.step = input.step;
        }
        wrapper.appendChild(field);
        return wrapper;
    },
    createSelect(id, labelText, units) {
        const wrapper = document.createElement("div");
        wrapper.className = "flex flex-col gap-1";
        const label = document.createElement("label");
        label.className = "text-xs font-bold text-slate-700";
        label.setAttribute("for", id);
        label.textContent = labelText;
        const select = document.createElement("select");
        select.className = "compact-select w-full h-9 font-medium text-slate-700 text-xs";
        select.id = id;
        Object.entries(units).forEach(([key, unit], index) => {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = unit.label;
            if (index === 0) option.selected = true;
            select.appendChild(option);
        });
        wrapper.appendChild(label);
        wrapper.appendChild(select);
        return wrapper;
    },
    bindEvents(config) {
        const calcButton = document.getElementById("calcButton");
        const resetButton = document.getElementById("resetButton");
        if (calcButton) calcButton.addEventListener("click", () => this.calculate());
        if (resetButton) resetButton.addEventListener("click", () => this.resetInputs(config));
        document.querySelectorAll("#inputFields input, #inputFields select").forEach((input) => {
            input.addEventListener("input", () => this.calculate());
            input.addEventListener("change", () => this.calculate());
        });
    },
    resetInputs(config) {
        document.querySelectorAll("#inputFields input, #inputFields select").forEach((input) => {
            if (input.tagName === "SELECT") {
                input.selectedIndex = 0;
            } else if (input.type === "date") {
                input.value = "";
            } else {
                const def = config.inputs ? config.inputs.find((item) => item.id === input.id) : null;
                if (def && def.value !== undefined) {
                    input.value = def.value;
                } else if (!config.inputs && input.id === "inputValue") {
                    input.value = 1;
                }
            }
        });
        this.calculate();
    },
    calculate() {
        const config = this.config;
        if (!config) return;
        const values = this.collectValues(config);
        let output;
        if (config.type === "converter") {
            output = this.convertValues(values, config);
        } else if (config.type === "temperature") {
            output = this.convertTemperature(values, config);
        } else if (config.type === "fuel-economy") {
            output = this.convertFuelEconomy(values, config);
        } else if (config.template) {
            output = this.computeTemplate(values, config);
        } else {
            output = config.compute(values);
        }
        this.renderResults(output, config);
    },
    collectValues(config) {
        const values = {};
        if (config.type === "converter" || config.type === "temperature" || config.type === "fuel-economy") {
            values.inputValue = parseFloat(document.getElementById("inputValue").value) || 0;
            values.fromUnit = document.getElementById("fromUnit").value;
            values.toUnit = document.getElementById("toUnit").value;
            return values;
        }
        config.inputs.forEach((input) => {
            const field = document.getElementById(input.id);
            if (!field) return;
            if (input.type === "select") {
                values[input.id] = field.value;
            } else if (input.type === "date" || input.type === "time") {
                values[input.id] = field.value;
            } else {
                values[input.id] = parseFloat(field.value) || 0;
            }
        });
        return values;
    },
    convertValues(values, config) {
        const fromUnit = config.units[values.fromUnit];
        const toUnit = config.units[values.toUnit];
        const baseValue = values.inputValue * fromUnit.toBase;
        const convertedValue = toUnit.toBase === 0 ? 0 : baseValue / toUnit.toBase;
        const quickUnits = config.quickUnits || Object.keys(config.units).slice(0, 4);
        const quickConversions = quickUnits.map((unitKey) => {
            const unit = config.units[unitKey];
            const converted = unit.toBase === 0 ? 0 : baseValue / unit.toBase;
            return { label: unit.label, value: converted };
        });
        return {
            results: {
                main: convertedValue,
                quickConversions
            },
            summary: `${values.inputValue} ${fromUnit.label} equals ${convertedValue.toFixed(4)} ${toUnit.label}.`,
            formula: `Converted by scaling to base unit then to ${toUnit.label}.`
        };
    },
    convertTemperature(values) {
        const toCelsius = (value, unit) => {
            if (unit === "c") return value;
            if (unit === "f") return (value - 32) * (5 / 9);
            return value - 273.15;
        };
        const fromCelsius = (value, unit) => {
            if (unit === "c") return value;
            if (unit === "f") return value * (9 / 5) + 32;
            return value + 273.15;
        };
        const celsius = toCelsius(values.inputValue, values.fromUnit);
        const convertedValue = fromCelsius(celsius, values.toUnit);
        return {
            results: {
                main: convertedValue,
                quickConversions: [
                    { label: "Celsius (°C)", value: celsius },
                    { label: "Fahrenheit (°F)", value: fromCelsius(celsius, "f") },
                    { label: "Kelvin (K)", value: fromCelsius(celsius, "k") }
                ]
            },
            summary: `${values.inputValue}° converts to ${convertedValue.toFixed(2)} in the target unit.`,
            formula: "Temperature conversions account for offsets and scales."
        };
    },
    convertFuelEconomy(values) {
        const toLPer100 = (value, unit) => {
            if (unit === "l100") return value;
            if (unit === "mpg") return 235.215 / value;
            return 100 / value;
        };
        const fromLPer100 = (value, unit) => {
            if (unit === "l100") return value;
            if (unit === "mpg") return 235.215 / value;
            return 100 / value;
        };
        const l100 = toLPer100(values.inputValue, values.fromUnit);
        const convertedValue = fromLPer100(l100, values.toUnit);
        return {
            results: {
                main: convertedValue,
                quickConversions: [
                    { label: "Miles per Gallon", value: fromLPer100(l100, "mpg") },
                    { label: "Kilometers per Liter", value: fromLPer100(l100, "kpl") },
                    { label: "Liters per 100km", value: l100 }
                ]
            },
            summary: `${values.inputValue} ${values.fromUnit} equals ${convertedValue.toFixed(2)} ${values.toUnit}.`,
            formula: "Fuel economy conversion uses MPG ↔ L/100km relationships."
        };
    },
    computeTemplate(values, config) {
        switch (config.template) {
            case "ratio": {
                const ratio = values.denominator === 0 ? 0 : values.numerator / values.denominator;
                return {
                    results: { ratio, percent: ratio },
                    summary: `Ratio is ${ratio.toFixed(2)} (=${(ratio * 100).toFixed(1)}%).`,
                    formula: "Ratio = Numerator ÷ Denominator"
                };
            }
            case "percentage": {
                const portion = values.base * (values.percent / 100);
                const total = values.base + portion;
                return {
                    results: { portion, total },
                    summary: `${values.percent}% of ${values.base} is ${portion.toFixed(2)}.`,
                    formula: "Portion = Base × Percent ÷ 100"
                };
            }
            case "perUnit": {
                const perUnit = values.units === 0 ? 0 : values.total / values.units;
                const inverse = values.total === 0 ? 0 : values.units / values.total;
                return {
                    results: { perUnit, inverse },
                    summary: `Each unit is about ${perUnit.toFixed(2)}.`,
                    formula: "Per Unit = Total ÷ Units"
                };
            }
            case "difference": {
                const difference = values.valueA - values.valueB;
                const percentChange = values.valueB === 0 ? 0 : difference / values.valueB;
                return {
                    results: { difference, percentChange },
                    summary: `Difference is ${difference.toFixed(2)}.`,
                    formula: "Difference = Value A − Value B"
                };
            }
            case "growth": {
                const rate = values.rate / 100;
                const future = values.start * Math.pow(1 + rate, values.periods);
                const growth = future - values.start;
                return {
                    results: { future, growth },
                    summary: `Value grows to ${future.toFixed(2)} after ${values.periods} periods.`,
                    formula: "Future = Start × (1 + rate)^periods"
                };
            }
            default:
                return { results: {}, summary: "Enter values to calculate.", formula: "Formula not available." };
        }
    },
    renderResults(output, config) {
        const resultMain = document.getElementById("resultMain");
        const resultSubtitle = document.getElementById("resultSubtitle");
        const resultDetails = document.getElementById("resultDetails");
        const formulaBox = document.getElementById("formulaBox");
        if (!output) return;
        if (config.type === "converter" || config.type === "temperature" || config.type === "fuel-economy") {
            if (resultMain) resultMain.textContent = this.formatValue(output.results.main, "number");
            if (resultSubtitle) resultSubtitle.textContent = output.summary;
            if (formulaBox) formulaBox.textContent = output.formula;
            if (resultDetails) {
                resultDetails.innerHTML = "";
                output.results.quickConversions.forEach((item) => {
                    const card = document.createElement("div");
                    card.className = "rounded border border-slate-200 bg-white px-3 py-2 shadow-sm flex items-center justify-between";
                    const label = document.createElement("span");
                    label.className = "text-[10px] font-bold text-slate-500 uppercase tracking-wide";
                    label.textContent = item.label;
                    const value = document.createElement("div");
                    value.className = "text-sm font-bold text-slate-900";
                    value.textContent = this.formatValue(item.value, "number");
                    card.appendChild(label);
                    card.appendChild(value);
                    resultDetails.appendChild(card);
                });
            }
            return;
        }
        const results = output.results || {};
        const mainValue = results[config.mainOutput];
        if (resultMain) resultMain.textContent = this.formatValue(mainValue, this.findFormat(config, config.mainOutput), this.findUnit(config, config.mainOutput));
        if (resultSubtitle) resultSubtitle.textContent = output.summary || "";
        if (formulaBox) formulaBox.textContent = output.formula || "";
        if (resultDetails) {
            resultDetails.innerHTML = "";
            config.outputs.forEach((outputItem) => {
                const card = document.createElement("div");
                card.className = "rounded border border-slate-200 bg-white px-3 py-2 shadow-sm flex items-center justify-between";
                const label = document.createElement("span");
                label.className = "text-[10px] font-bold text-slate-500 uppercase tracking-wide";
                label.textContent = outputItem.label;
                const value = document.createElement("div");
                value.className = "text-sm font-bold text-slate-900";
                value.textContent = this.formatValue(results[outputItem.id], outputItem.format, outputItem.unit);
                card.appendChild(label);
                card.appendChild(value);
                resultDetails.appendChild(card);
            });
        }
    },
    findFormat(config, key) {
        const output = config.outputs.find((item) => item.id === key);
        return output ? output.format : "number";
    },
    findUnit(config, key) {
        const output = config.outputs.find((item) => item.id === key);
        return output ? output.unit : "";
    },
    formatValue(value, format, unit) {
        if (value === "∞") return value;
        if (typeof value === "string") return value;
        if (Number.isNaN(value)) return "--";
        switch (format) {
            case "currency":
                return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(value);
            case "percent":
                return `${(value * 100).toFixed(1)}%`;
            case "number":
                return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}${unit ? ` ${unit}` : ""}`;
            case "text":
                return value;
            default:
                return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}${unit ? ` ${unit}` : ""}`;
        }
    },
    buildSeo(config) {
        const seoTitle = document.getElementById("seoTitle");
        const seoContent = document.getElementById("seoContent");
        if (!seoTitle || !seoContent || !config.seo) return;
        const whatText = config.seo.what || `The ${config.title} helps you ${config.description.toLowerCase()}`;
        const howSteps = config.seo.how || [
            "Enter your values in the input fields.",
            "Review the calculated results instantly.",
            "Adjust inputs to compare scenarios."
        ];
        const formulaText = config.seo.formula || config.seo.formulaDetail || "Refer to the formula shown above for the calculation logic.";
        const tips = config.seo.tips || config.seo.bullets || [
            "Use realistic numbers for best accuracy.",
            "Compare multiple scenarios to plan ahead.",
            "Save results to your dashboard for quick access."
        ];
        const faqItems = config.seo.faq || [
            { q: `How accurate is the ${config.title}?`, a: "This calculator follows standard formulas and provides estimates based on your inputs." },
            { q: "Can I save my results?", a: "Yes, use the save button to store results in your dashboard." },
            { q: "Does it work on mobile?", a: "All DailyCalc tools are mobile-first and responsive." }
        ];
        const related = this.getRelatedTools(config.category);

        seoTitle.textContent = config.seo.title;
        seoContent.innerHTML = `
            <div class="space-y-6">
                <div>
                    <h3 class="text-sm font-bold text-slate-800">What this calculator does</h3>
                    <p>${whatText}</p>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-slate-800">How to use it</h3>
                    <ol class="list-decimal pl-4 space-y-1">
                        ${howSteps.map((step) => `<li>${step}</li>`).join("")}
                    </ol>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-slate-800">Formula</h3>
                    <p>${formulaText}</p>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-slate-800">Tips & best practices</h3>
                    <ul class="list-disc pl-4 space-y-1">
                        ${tips.map((tip) => `<li>${tip}</li>`).join("")}
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-slate-800">FAQ</h3>
                    <div class="space-y-3">
                        ${faqItems.map((item) => `
                            <div class="rounded border border-slate-200 bg-white p-3 shadow-sm">
                                <p class="font-semibold text-slate-700">${item.q}</p>
                                <p>${item.a}</p>
                            </div>
                        `).join("")}
                    </div>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-slate-800">Related tools</h3>
                    <div class="grid gap-3 sm:grid-cols-2">
                        ${related.map((tool) => `
                            <a href="${tool.url}" class="block rounded border border-slate-200 bg-white p-3 shadow-sm hover:border-brand-red/40 transition">
                                <div class="flex items-center gap-2 text-slate-700 font-semibold text-xs">
                                    <i class="fa-solid ${tool.icon} text-brand-red"></i>
                                    <span>${tool.name}</span>
                                </div>
                                <p class="mt-1 text-[11px] text-slate-500">${tool.description}</p>
                            </a>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;
    },
    getRelatedTools(category) {
        if (!window.CALCULATOR_REGISTRY || !window.location) return [];
        const tools = window.CALCULATOR_REGISTRY[category] || [];
        const current = window.location.pathname;
        const related = tools.filter((tool) => tool.url !== current).slice(0, 5);
        return related.map((tool) => ({
            ...tool,
            description: `${tool.name} for quick answers in the ${category} category.`
        }));
    },
    timeToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    },
    minutesToTime(minutes) {
        const hrs = Math.floor(minutes / 60) % 24;
        const mins = Math.round(minutes % 60);
        return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
    },
    getIsoWeek(date) {
        const tempDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = tempDate.getUTCDay() || 7;
        tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
        return Math.ceil(((tempDate - yearStart) / 86400000 + 1) / 7);
    }
};

if (window.EXTRA_CALCULATORS) {
    Object.assign(SIMPLE_CALCULATORS, window.EXTRA_CALCULATORS);
}

window.SimpleCalculator = SimpleCalculator;
