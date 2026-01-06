window.EXTRA_CALCULATORS = {
    "savings-rate-calculator": {
        "title": "Savings Rate Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate savings rate quickly with this calculator.",
        "resultLabel": "Savings Rate",
        "description": "Estimate savings rate quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Savings Rate Guide",
            "bullets": [
                "Estimate savings rate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "debt-ratio-calculator": {
        "title": "Debt Ratio Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate debt ratio quickly with this calculator.",
        "resultLabel": "Debt Ratio",
        "description": "Estimate debt ratio quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Debt Ratio Guide",
            "bullets": [
                "Estimate debt ratio in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "expense-ratio-calculator": {
        "title": "Expense Ratio Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate expense ratio quickly with this calculator.",
        "resultLabel": "Expense Ratio",
        "description": "Estimate expense ratio quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Expense Ratio Guide",
            "bullets": [
                "Estimate expense ratio in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "profit-margin-calculator": {
        "title": "Profit Margin Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate profit margin quickly with this calculator.",
        "resultLabel": "Profit Margin",
        "description": "Estimate profit margin quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Profit Margin Guide",
            "bullets": [
                "Estimate profit margin in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "break-even-point-calculator": {
        "title": "Break-even Point Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate break-even point quickly with this calculator.",
        "resultLabel": "Break-even Point",
        "description": "Estimate break-even point quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Break-even Point Guide",
            "bullets": [
                "Estimate break-even point in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cash-flow-gap-calculator": {
        "title": "Cash Flow Gap Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate cash flow gap quickly with this calculator.",
        "resultLabel": "Cash Flow Gap",
        "description": "Estimate cash flow gap quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Cash Flow Gap Guide",
            "bullets": [
                "Estimate cash flow gap in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "budget-variance-calculator": {
        "title": "Budget Variance Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate budget variance quickly with this calculator.",
        "resultLabel": "Budget Variance",
        "description": "Estimate budget variance quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Budget Variance Guide",
            "bullets": [
                "Estimate budget variance in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "hourly-rate-calculator": {
        "title": "Hourly Rate Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate hourly rate quickly with this calculator.",
        "resultLabel": "Hourly Rate",
        "description": "Estimate hourly rate quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Hourly Rate Guide",
            "bullets": [
                "Estimate hourly rate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cost-of-delay-calculator": {
        "title": "Cost of Delay Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate cost of delay quickly with this calculator.",
        "resultLabel": "Cost of Delay",
        "description": "Estimate cost of delay quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Cost of Delay Guide",
            "bullets": [
                "Estimate cost of delay in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "roi-calculator": {
        "title": "ROI Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate roi quickly with this calculator.",
        "resultLabel": "ROI",
        "description": "Estimate roi quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "ROI Guide",
            "bullets": [
                "Estimate roi in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "payback-period-calculator": {
        "title": "Payback Period Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate payback period quickly with this calculator.",
        "resultLabel": "Payback Period",
        "description": "Estimate payback period quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Payback Period Guide",
            "bullets": [
                "Estimate payback period in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "emergency-fund-calculator": {
        "title": "Emergency Fund Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate emergency fund quickly with this calculator.",
        "resultLabel": "Emergency Fund",
        "description": "Estimate emergency fund quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Emergency Fund Guide",
            "bullets": [
                "Estimate emergency fund in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "loan-to-value-calculator": {
        "title": "Loan-to-Value Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate loan-to-value quickly with this calculator.",
        "resultLabel": "Loan-to-Value",
        "description": "Estimate loan-to-value quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Loan-to-Value Guide",
            "bullets": [
                "Estimate loan-to-value in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "credit-utilization-calculator": {
        "title": "Credit Utilization Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate credit utilization quickly with this calculator.",
        "resultLabel": "Credit Utilization",
        "description": "Estimate credit utilization quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Credit Utilization Guide",
            "bullets": [
                "Estimate credit utilization in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "net-income-calculator": {
        "title": "Net Income Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate net income quickly with this calculator.",
        "resultLabel": "Net Income",
        "description": "Estimate net income quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Net Income Guide",
            "bullets": [
                "Estimate net income in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "operating-margin-calculator": {
        "title": "Operating Margin Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate operating margin quickly with this calculator.",
        "resultLabel": "Operating Margin",
        "description": "Estimate operating margin quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Operating Margin Guide",
            "bullets": [
                "Estimate operating margin in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "gross-margin-calculator": {
        "title": "Gross Margin Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate gross margin quickly with this calculator.",
        "resultLabel": "Gross Margin",
        "description": "Estimate gross margin quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Gross Margin Guide",
            "bullets": [
                "Estimate gross margin in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "tax-withholding-calculator": {
        "title": "Tax Withholding Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate tax withholding quickly with this calculator.",
        "resultLabel": "Tax Withholding",
        "description": "Estimate tax withholding quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Tax Withholding Guide",
            "bullets": [
                "Estimate tax withholding in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "investment-yield-calculator": {
        "title": "Investment Yield Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate investment yield quickly with this calculator.",
        "resultLabel": "Investment Yield",
        "description": "Estimate investment yield quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Investment Yield Guide",
            "bullets": [
                "Estimate investment yield in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "interest-spread-calculator": {
        "title": "Interest Spread Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate interest spread quickly with this calculator.",
        "resultLabel": "Interest Spread",
        "description": "Estimate interest spread quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Interest Spread Guide",
            "bullets": [
                "Estimate interest spread in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "budget-split-calculator": {
        "title": "Budget Split Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate budget split quickly with this calculator.",
        "resultLabel": "Budget Split",
        "description": "Estimate budget split quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Budget Split Guide",
            "bullets": [
                "Estimate budget split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "savings-ratio-calculator": {
        "title": "Savings Ratio Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate savings ratio quickly with this calculator.",
        "resultLabel": "Savings Ratio",
        "description": "Estimate savings ratio quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Savings Ratio Guide",
            "bullets": [
                "Estimate savings ratio in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "debt-paydown-calculator": {
        "title": "Debt Paydown Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate debt paydown quickly with this calculator.",
        "resultLabel": "Debt Paydown",
        "description": "Estimate debt paydown quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Debt Paydown Guide",
            "bullets": [
                "Estimate debt paydown in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cash-burn-calculator": {
        "title": "Cash Burn Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate cash burn quickly with this calculator.",
        "resultLabel": "Cash Burn",
        "description": "Estimate cash burn quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Cash Burn Guide",
            "bullets": [
                "Estimate cash burn in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "runway-calculator": {
        "title": "Runway Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate runway quickly with this calculator.",
        "resultLabel": "Runway",
        "description": "Estimate runway quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Runway Guide",
            "bullets": [
                "Estimate runway in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "profit-split-calculator": {
        "title": "Profit Split Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate profit split quickly with this calculator.",
        "resultLabel": "Profit Split",
        "description": "Estimate profit split quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Profit Split Guide",
            "bullets": [
                "Estimate profit split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cost-per-lead-calculator": {
        "title": "Cost Per Lead Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate cost per lead quickly with this calculator.",
        "resultLabel": "Cost Per Lead",
        "description": "Estimate cost per lead quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Cost Per Lead Guide",
            "bullets": [
                "Estimate cost per lead in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "revenue-per-user-calculator": {
        "title": "Revenue Per User Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate revenue per user quickly with this calculator.",
        "resultLabel": "Revenue Per User",
        "description": "Estimate revenue per user quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Revenue Per User Guide",
            "bullets": [
                "Estimate revenue per user in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "price-markup-calculator": {
        "title": "Price Markup Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate price markup quickly with this calculator.",
        "resultLabel": "Price Markup",
        "description": "Estimate price markup quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Price Markup Guide",
            "bullets": [
                "Estimate price markup in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "markup-to-margin-calculator": {
        "title": "Markup to Margin Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate markup to margin quickly with this calculator.",
        "resultLabel": "Markup to Margin",
        "description": "Estimate markup to margin quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Markup to Margin Guide",
            "bullets": [
                "Estimate markup to margin in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "discount-rate-calculator": {
        "title": "Discount Rate Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate discount rate quickly with this calculator.",
        "resultLabel": "Discount Rate",
        "description": "Estimate discount rate quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Discount Rate Guide",
            "bullets": [
                "Estimate discount rate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "inflation-adjusted-income-calculator": {
        "title": "Inflation Adjusted Income Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate inflation adjusted income quickly with this calculator.",
        "resultLabel": "Inflation Adjusted Income",
        "description": "Estimate inflation adjusted income quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Inflation Adjusted Income Guide",
            "bullets": [
                "Estimate inflation adjusted income in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "future-value-calculator": {
        "title": "Future Value Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate future value quickly with this calculator.",
        "resultLabel": "Future Value",
        "description": "Estimate future value quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Future Value Guide",
            "bullets": [
                "Estimate future value in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "present-value-calculator": {
        "title": "Present Value Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate present value quickly with this calculator.",
        "resultLabel": "Present Value",
        "description": "Estimate present value quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Present Value Guide",
            "bullets": [
                "Estimate present value in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "dividend-yield-calculator": {
        "title": "Dividend Yield Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate dividend yield quickly with this calculator.",
        "resultLabel": "Dividend Yield",
        "description": "Estimate dividend yield quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Dividend Yield Guide",
            "bullets": [
                "Estimate dividend yield in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "mortgage-affordability-calculator": {
        "title": "Mortgage Affordability Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate mortgage affordability quickly with this calculator.",
        "resultLabel": "Mortgage Affordability",
        "description": "Estimate mortgage affordability quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Mortgage Affordability Guide",
            "bullets": [
                "Estimate mortgage affordability in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "rent-vs-buy-calculator": {
        "title": "Rent vs Buy Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate rent vs buy quickly with this calculator.",
        "resultLabel": "Rent vs Buy",
        "description": "Estimate rent vs buy quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Rent vs Buy Guide",
            "bullets": [
                "Estimate rent vs buy in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "finance-charge-calculator": {
        "title": "Finance Charge Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate finance charge quickly with this calculator.",
        "resultLabel": "Finance Charge",
        "description": "Estimate finance charge quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Finance Charge Guide",
            "bullets": [
                "Estimate finance charge in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "apr-to-apy-calculator": {
        "title": "APR to APY Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate apr to apy quickly with this calculator.",
        "resultLabel": "APR to APY",
        "description": "Estimate apr to apy quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "APR to APY Guide",
            "bullets": [
                "Estimate apr to apy in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "capital-gains-calculator": {
        "title": "Capital Gains Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate capital gains quickly with this calculator.",
        "resultLabel": "Capital Gains",
        "description": "Estimate capital gains quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Capital Gains Guide",
            "bullets": [
                "Estimate capital gains in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "take-home-pay-calculator": {
        "title": "Take-home Pay Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate take-home pay quickly with this calculator.",
        "resultLabel": "Take-home Pay",
        "description": "Estimate take-home pay quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Take-home Pay Guide",
            "bullets": [
                "Estimate take-home pay in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "salary-growth-calculator": {
        "title": "Salary Growth Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate salary growth quickly with this calculator.",
        "resultLabel": "Salary Growth",
        "description": "Estimate salary growth quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Salary Growth Guide",
            "bullets": [
                "Estimate salary growth in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "revenue-forecast-calculator": {
        "title": "Revenue Forecast Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate revenue forecast quickly with this calculator.",
        "resultLabel": "Revenue Forecast",
        "description": "Estimate revenue forecast quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Revenue Forecast Guide",
            "bullets": [
                "Estimate revenue forecast in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "expense-forecast-calculator": {
        "title": "Expense Forecast Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate expense forecast quickly with this calculator.",
        "resultLabel": "Expense Forecast",
        "description": "Estimate expense forecast quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Expense Forecast Guide",
            "bullets": [
                "Estimate expense forecast in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cash-reserve-calculator": {
        "title": "Cash Reserve Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate cash reserve quickly with this calculator.",
        "resultLabel": "Cash Reserve",
        "description": "Estimate cash reserve quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Cash Reserve Guide",
            "bullets": [
                "Estimate cash reserve in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "bond-yield-calculator": {
        "title": "Bond Yield Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate bond yield quickly with this calculator.",
        "resultLabel": "Bond Yield",
        "description": "Estimate bond yield quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Bond Yield Guide",
            "bullets": [
                "Estimate bond yield in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "portfolio-weight-calculator": {
        "title": "Portfolio Weight Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate portfolio weight quickly with this calculator.",
        "resultLabel": "Portfolio Weight",
        "description": "Estimate portfolio weight quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Portfolio Weight Guide",
            "bullets": [
                "Estimate portfolio weight in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "tax-bracket-impact-calculator": {
        "title": "Tax Bracket Impact Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate tax bracket impact quickly with this calculator.",
        "resultLabel": "Tax Bracket Impact",
        "description": "Estimate tax bracket impact quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Tax Bracket Impact Guide",
            "bullets": [
                "Estimate tax bracket impact in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "minimum-payment-calculator": {
        "title": "Minimum Payment Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate minimum payment quickly with this calculator.",
        "resultLabel": "Minimum Payment",
        "description": "Estimate minimum payment quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Minimum Payment Guide",
            "bullets": [
                "Estimate minimum payment in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "balance-transfer-calculator": {
        "title": "Balance Transfer Calculator",
        "category": "Finance",
        "icon": "fa-coins",
        "tagline": "Estimate balance transfer quickly with this calculator.",
        "resultLabel": "Balance Transfer",
        "description": "Estimate balance transfer quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Balance Transfer Guide",
            "bullets": [
                "Estimate balance transfer in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "protein-intake-calculator": {
        "title": "Protein Intake Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate protein intake quickly with this calculator.",
        "resultLabel": "Protein Intake",
        "description": "Estimate protein intake quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Protein Intake Guide",
            "bullets": [
                "Estimate protein intake in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "hydration-goal-calculator": {
        "title": "Hydration Goal Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate hydration goal quickly with this calculator.",
        "resultLabel": "Hydration Goal",
        "description": "Estimate hydration goal quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Hydration Goal Guide",
            "bullets": [
                "Estimate hydration goal in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "bmi-quick-calculator": {
        "title": "BMI Quick Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate bmi quick quickly with this calculator.",
        "resultLabel": "BMI Quick",
        "description": "Estimate bmi quick quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "BMI Quick Guide",
            "bullets": [
                "Estimate bmi quick in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "resting-calories-calculator": {
        "title": "Resting Calories Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate resting calories quickly with this calculator.",
        "resultLabel": "Resting Calories",
        "description": "Estimate resting calories quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Resting Calories Guide",
            "bullets": [
                "Estimate resting calories in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "calorie-deficit-calculator": {
        "title": "Calorie Deficit Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate calorie deficit quickly with this calculator.",
        "resultLabel": "Calorie Deficit",
        "description": "Estimate calorie deficit quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Calorie Deficit Guide",
            "bullets": [
                "Estimate calorie deficit in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "carb-intake-calculator": {
        "title": "Carb Intake Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate carb intake quickly with this calculator.",
        "resultLabel": "Carb Intake",
        "description": "Estimate carb intake quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Carb Intake Guide",
            "bullets": [
                "Estimate carb intake in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "fat-intake-calculator": {
        "title": "Fat Intake Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate fat intake quickly with this calculator.",
        "resultLabel": "Fat Intake",
        "description": "Estimate fat intake quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Fat Intake Guide",
            "bullets": [
                "Estimate fat intake in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "step-goal-calculator": {
        "title": "Step Goal Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate step goal quickly with this calculator.",
        "resultLabel": "Step Goal",
        "description": "Estimate step goal quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Step Goal Guide",
            "bullets": [
                "Estimate step goal in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "sleep-debt-calculator": {
        "title": "Sleep Debt Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate sleep debt quickly with this calculator.",
        "resultLabel": "Sleep Debt",
        "description": "Estimate sleep debt quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Sleep Debt Guide",
            "bullets": [
                "Estimate sleep debt in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "heart-rate-recovery-calculator": {
        "title": "Heart Rate Recovery Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate heart rate recovery quickly with this calculator.",
        "resultLabel": "Heart Rate Recovery",
        "description": "Estimate heart rate recovery quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Heart Rate Recovery Guide",
            "bullets": [
                "Estimate heart rate recovery in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "workout-volume-calculator": {
        "title": "Workout Volume Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate workout volume quickly with this calculator.",
        "resultLabel": "Workout Volume",
        "description": "Estimate workout volume quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Workout Volume Guide",
            "bullets": [
                "Estimate workout volume in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "running-pace-calculator": {
        "title": "Running Pace Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate running pace quickly with this calculator.",
        "resultLabel": "Running Pace",
        "description": "Estimate running pace quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Running Pace Guide",
            "bullets": [
                "Estimate running pace in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cycling-pace-calculator": {
        "title": "Cycling Pace Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate cycling pace quickly with this calculator.",
        "resultLabel": "Cycling Pace",
        "description": "Estimate cycling pace quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Cycling Pace Guide",
            "bullets": [
                "Estimate cycling pace in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "swim-pace-calculator": {
        "title": "Swim Pace Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate swim pace quickly with this calculator.",
        "resultLabel": "Swim Pace",
        "description": "Estimate swim pace quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Swim Pace Guide",
            "bullets": [
                "Estimate swim pace in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "body-mass-change-calculator": {
        "title": "Body Mass Change Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate body mass change quickly with this calculator.",
        "resultLabel": "Body Mass Change",
        "description": "Estimate body mass change quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Body Mass Change Guide",
            "bullets": [
                "Estimate body mass change in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "lean-mass-calculator": {
        "title": "Lean Mass Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate lean mass quickly with this calculator.",
        "resultLabel": "Lean Mass",
        "description": "Estimate lean mass quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Lean Mass Guide",
            "bullets": [
                "Estimate lean mass in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "fat-loss-calculator": {
        "title": "Fat Loss Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate fat loss quickly with this calculator.",
        "resultLabel": "Fat Loss",
        "description": "Estimate fat loss quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Fat Loss Guide",
            "bullets": [
                "Estimate fat loss in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "target-heart-rate-calculator": {
        "title": "Target Heart Rate Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate target heart rate quickly with this calculator.",
        "resultLabel": "Target Heart Rate",
        "description": "Estimate target heart rate quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Target Heart Rate Guide",
            "bullets": [
                "Estimate target heart rate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "recovery-time-calculator": {
        "title": "Recovery Time Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate recovery time quickly with this calculator.",
        "resultLabel": "Recovery Time",
        "description": "Estimate recovery time quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Recovery Time Guide",
            "bullets": [
                "Estimate recovery time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "vo2-max-estimate-calculator": {
        "title": "VO2 Max Estimate Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate vo2 max estimate quickly with this calculator.",
        "resultLabel": "VO2 Max Estimate",
        "description": "Estimate vo2 max estimate quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "VO2 Max Estimate Guide",
            "bullets": [
                "Estimate vo2 max estimate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "calories-per-mile-calculator": {
        "title": "Calories per Mile Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate calories per mile quickly with this calculator.",
        "resultLabel": "Calories per Mile",
        "description": "Estimate calories per mile quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Calories per Mile Guide",
            "bullets": [
                "Estimate calories per mile in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "strength-ratio-calculator": {
        "title": "Strength Ratio Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate strength ratio quickly with this calculator.",
        "resultLabel": "Strength Ratio",
        "description": "Estimate strength ratio quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Strength Ratio Guide",
            "bullets": [
                "Estimate strength ratio in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "flexibility-score-calculator": {
        "title": "Flexibility Score Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate flexibility score quickly with this calculator.",
        "resultLabel": "Flexibility Score",
        "description": "Estimate flexibility score quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Flexibility Score Guide",
            "bullets": [
                "Estimate flexibility score in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "wellness-score-calculator": {
        "title": "Wellness Score Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate wellness score quickly with this calculator.",
        "resultLabel": "Wellness Score",
        "description": "Estimate wellness score quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Wellness Score Guide",
            "bullets": [
                "Estimate wellness score in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "stress-load-calculator": {
        "title": "Stress Load Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate stress load quickly with this calculator.",
        "resultLabel": "Stress Load",
        "description": "Estimate stress load quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Stress Load Guide",
            "bullets": [
                "Estimate stress load in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "nutrition-split-calculator": {
        "title": "Nutrition Split Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate nutrition split quickly with this calculator.",
        "resultLabel": "Nutrition Split",
        "description": "Estimate nutrition split quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Nutrition Split Guide",
            "bullets": [
                "Estimate nutrition split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "fiber-target-calculator": {
        "title": "Fiber Target Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate fiber target quickly with this calculator.",
        "resultLabel": "Fiber Target",
        "description": "Estimate fiber target quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Fiber Target Guide",
            "bullets": [
                "Estimate fiber target in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "sugar-limit-calculator": {
        "title": "Sugar Limit Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate sugar limit quickly with this calculator.",
        "resultLabel": "Sugar Limit",
        "description": "Estimate sugar limit quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Sugar Limit Guide",
            "bullets": [
                "Estimate sugar limit in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "sodium-limit-calculator": {
        "title": "Sodium Limit Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate sodium limit quickly with this calculator.",
        "resultLabel": "Sodium Limit",
        "description": "Estimate sodium limit quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Sodium Limit Guide",
            "bullets": [
                "Estimate sodium limit in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "water-breaks-calculator": {
        "title": "Water Breaks Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate water breaks quickly with this calculator.",
        "resultLabel": "Water Breaks",
        "description": "Estimate water breaks quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Water Breaks Guide",
            "bullets": [
                "Estimate water breaks in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "macro-split-calculator": {
        "title": "Macro Split Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate macro split quickly with this calculator.",
        "resultLabel": "Macro Split",
        "description": "Estimate macro split quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Macro Split Guide",
            "bullets": [
                "Estimate macro split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "energy-balance-calculator": {
        "title": "Energy Balance Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate energy balance quickly with this calculator.",
        "resultLabel": "Energy Balance",
        "description": "Estimate energy balance quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Energy Balance Guide",
            "bullets": [
                "Estimate energy balance in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "activity-score-calculator": {
        "title": "Activity Score Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate activity score quickly with this calculator.",
        "resultLabel": "Activity Score",
        "description": "Estimate activity score quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Activity Score Guide",
            "bullets": [
                "Estimate activity score in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "body-age-calculator": {
        "title": "Body Age Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate body age quickly with this calculator.",
        "resultLabel": "Body Age",
        "description": "Estimate body age quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Body Age Guide",
            "bullets": [
                "Estimate body age in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "metabolism-score-calculator": {
        "title": "Metabolism Score Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate metabolism score quickly with this calculator.",
        "resultLabel": "Metabolism Score",
        "description": "Estimate metabolism score quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Metabolism Score Guide",
            "bullets": [
                "Estimate metabolism score in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "hydration-reminder-calculator": {
        "title": "Hydration Reminder Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate hydration reminder quickly with this calculator.",
        "resultLabel": "Hydration Reminder",
        "description": "Estimate hydration reminder quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Hydration Reminder Guide",
            "bullets": [
                "Estimate hydration reminder in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "calories-per-step-calculator": {
        "title": "Calories per Step Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate calories per step quickly with this calculator.",
        "resultLabel": "Calories per Step",
        "description": "Estimate calories per step quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Calories per Step Guide",
            "bullets": [
                "Estimate calories per step in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "workout-intensity-calculator": {
        "title": "Workout Intensity Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate workout intensity quickly with this calculator.",
        "resultLabel": "Workout Intensity",
        "description": "Estimate workout intensity quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Workout Intensity Guide",
            "bullets": [
                "Estimate workout intensity in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "zone-minutes-calculator": {
        "title": "Zone Minutes Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate zone minutes quickly with this calculator.",
        "resultLabel": "Zone Minutes",
        "description": "Estimate zone minutes quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Zone Minutes Guide",
            "bullets": [
                "Estimate zone minutes in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "warmup-time-calculator": {
        "title": "Warmup Time Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate warmup time quickly with this calculator.",
        "resultLabel": "Warmup Time",
        "description": "Estimate warmup time quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Warmup Time Guide",
            "bullets": [
                "Estimate warmup time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cooldown-time-calculator": {
        "title": "Cooldown Time Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate cooldown time quickly with this calculator.",
        "resultLabel": "Cooldown Time",
        "description": "Estimate cooldown time quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Cooldown Time Guide",
            "bullets": [
                "Estimate cooldown time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "training-load-calculator": {
        "title": "Training Load Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate training load quickly with this calculator.",
        "resultLabel": "Training Load",
        "description": "Estimate training load quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Training Load Guide",
            "bullets": [
                "Estimate training load in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "rpe-score-calculator": {
        "title": "RPE Score Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate rpe score quickly with this calculator.",
        "resultLabel": "RPE Score",
        "description": "Estimate rpe score quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "RPE Score Guide",
            "bullets": [
                "Estimate rpe score in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "plank-target-calculator": {
        "title": "Plank Target Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate plank target quickly with this calculator.",
        "resultLabel": "Plank Target",
        "description": "Estimate plank target quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Plank Target Guide",
            "bullets": [
                "Estimate plank target in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "stretching-time-calculator": {
        "title": "Stretching Time Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate stretching time quickly with this calculator.",
        "resultLabel": "Stretching Time",
        "description": "Estimate stretching time quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Stretching Time Guide",
            "bullets": [
                "Estimate stretching time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "meditation-minutes-calculator": {
        "title": "Meditation Minutes Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate meditation minutes quickly with this calculator.",
        "resultLabel": "Meditation Minutes",
        "description": "Estimate meditation minutes quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Meditation Minutes Guide",
            "bullets": [
                "Estimate meditation minutes in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "recovery-index-calculator": {
        "title": "Recovery Index Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate recovery index quickly with this calculator.",
        "resultLabel": "Recovery Index",
        "description": "Estimate recovery index quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Recovery Index Guide",
            "bullets": [
                "Estimate recovery index in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "sleep-quality-calculator": {
        "title": "Sleep Quality Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate sleep quality quickly with this calculator.",
        "resultLabel": "Sleep Quality",
        "description": "Estimate sleep quality quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Sleep Quality Guide",
            "bullets": [
                "Estimate sleep quality in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "fitness-goal-calculator": {
        "title": "Fitness Goal Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate fitness goal quickly with this calculator.",
        "resultLabel": "Fitness Goal",
        "description": "Estimate fitness goal quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Fitness Goal Guide",
            "bullets": [
                "Estimate fitness goal in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "calorie-burn-rate-calculator": {
        "title": "Calorie Burn Rate Calculator",
        "category": "Health",
        "icon": "fa-heart-pulse",
        "tagline": "Estimate calorie burn rate quickly with this calculator.",
        "resultLabel": "Calorie Burn Rate",
        "description": "Estimate calorie burn rate quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Calorie Burn Rate Guide",
            "bullets": [
                "Estimate calorie burn rate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "grocery-budget-calculator": {
        "title": "Grocery Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate grocery budget quickly with this calculator.",
        "resultLabel": "Grocery Budget",
        "description": "Estimate grocery budget quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Grocery Budget Guide",
            "bullets": [
                "Estimate grocery budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "meal-cost-calculator": {
        "title": "Meal Cost Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate meal cost quickly with this calculator.",
        "resultLabel": "Meal Cost",
        "description": "Estimate meal cost quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Meal Cost Guide",
            "bullets": [
                "Estimate meal cost in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "coffee-budget-calculator": {
        "title": "Coffee Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate coffee budget quickly with this calculator.",
        "resultLabel": "Coffee Budget",
        "description": "Estimate coffee budget quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Coffee Budget Guide",
            "bullets": [
                "Estimate coffee budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "commute-time-calculator": {
        "title": "Commute Time Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate commute time quickly with this calculator.",
        "resultLabel": "Commute Time",
        "description": "Estimate commute time quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Commute Time Guide",
            "bullets": [
                "Estimate commute time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "daily-routine-calculator": {
        "title": "Daily Routine Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate daily routine quickly with this calculator.",
        "resultLabel": "Daily Routine",
        "description": "Estimate daily routine quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Daily Routine Guide",
            "bullets": [
                "Estimate daily routine in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "travel-time-calculator": {
        "title": "Travel Time Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate travel time quickly with this calculator.",
        "resultLabel": "Travel Time",
        "description": "Estimate travel time quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Travel Time Guide",
            "bullets": [
                "Estimate travel time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "packing-list-calculator": {
        "title": "Packing List Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate packing list quickly with this calculator.",
        "resultLabel": "Packing List",
        "description": "Estimate packing list quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Packing List Guide",
            "bullets": [
                "Estimate packing list in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "laundry-schedule-calculator": {
        "title": "Laundry Schedule Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate laundry schedule quickly with this calculator.",
        "resultLabel": "Laundry Schedule",
        "description": "Estimate laundry schedule quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Laundry Schedule Guide",
            "bullets": [
                "Estimate laundry schedule in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "study-time-calculator": {
        "title": "Study Time Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate study time quickly with this calculator.",
        "resultLabel": "Study Time",
        "description": "Estimate study time quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Study Time Guide",
            "bullets": [
                "Estimate study time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "reading-pace-calculator": {
        "title": "Reading Pace Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate reading pace quickly with this calculator.",
        "resultLabel": "Reading Pace",
        "description": "Estimate reading pace quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Reading Pace Guide",
            "bullets": [
                "Estimate reading pace in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "focus-timer-calculator": {
        "title": "Focus Timer Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate focus timer quickly with this calculator.",
        "resultLabel": "Focus Timer",
        "description": "Estimate focus timer quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Focus Timer Guide",
            "bullets": [
                "Estimate focus timer in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "chore-split-calculator": {
        "title": "Chore Split Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate chore split quickly with this calculator.",
        "resultLabel": "Chore Split",
        "description": "Estimate chore split quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Chore Split Guide",
            "bullets": [
                "Estimate chore split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "home-budget-calculator": {
        "title": "Home Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate home budget quickly with this calculator.",
        "resultLabel": "Home Budget",
        "description": "Estimate home budget quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Home Budget Guide",
            "bullets": [
                "Estimate home budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "pet-care-calculator": {
        "title": "Pet Care Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate pet care quickly with this calculator.",
        "resultLabel": "Pet Care",
        "description": "Estimate pet care quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Pet Care Guide",
            "bullets": [
                "Estimate pet care in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "event-countdown-calculator": {
        "title": "Event Countdown Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate event countdown quickly with this calculator.",
        "resultLabel": "Event Countdown",
        "description": "Estimate event countdown quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Event Countdown Guide",
            "bullets": [
                "Estimate event countdown in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "gift-budget-calculator": {
        "title": "Gift Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate gift budget quickly with this calculator.",
        "resultLabel": "Gift Budget",
        "description": "Estimate gift budget quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Gift Budget Guide",
            "bullets": [
                "Estimate gift budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "rent-split-calculator": {
        "title": "Rent Split Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate rent split quickly with this calculator.",
        "resultLabel": "Rent Split",
        "description": "Estimate rent split quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Rent Split Guide",
            "bullets": [
                "Estimate rent split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "utility-split-calculator": {
        "title": "Utility Split Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate utility split quickly with this calculator.",
        "resultLabel": "Utility Split",
        "description": "Estimate utility split quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Utility Split Guide",
            "bullets": [
                "Estimate utility split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "car-pool-calculator": {
        "title": "Car Pool Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate car pool quickly with this calculator.",
        "resultLabel": "Car Pool",
        "description": "Estimate car pool quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Car Pool Guide",
            "bullets": [
                "Estimate car pool in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "car-expense-calculator": {
        "title": "Car Expense Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate car expense quickly with this calculator.",
        "resultLabel": "Car Expense",
        "description": "Estimate car expense quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Car Expense Guide",
            "bullets": [
                "Estimate car expense in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "meal-prep-calculator": {
        "title": "Meal Prep Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate meal prep quickly with this calculator.",
        "resultLabel": "Meal Prep",
        "description": "Estimate meal prep quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Meal Prep Guide",
            "bullets": [
                "Estimate meal prep in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cleaning-time-calculator": {
        "title": "Cleaning Time Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate cleaning time quickly with this calculator.",
        "resultLabel": "Cleaning Time",
        "description": "Estimate cleaning time quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Cleaning Time Guide",
            "bullets": [
                "Estimate cleaning time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "shopping-discount-calculator": {
        "title": "Shopping Discount Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate shopping discount quickly with this calculator.",
        "resultLabel": "Shopping Discount",
        "description": "Estimate shopping discount quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Shopping Discount Guide",
            "bullets": [
                "Estimate shopping discount in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "sale-price-calculator": {
        "title": "Sale Price Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate sale price quickly with this calculator.",
        "resultLabel": "Sale Price",
        "description": "Estimate sale price quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Sale Price Guide",
            "bullets": [
                "Estimate sale price in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "tip-split-calculator": {
        "title": "Tip Split Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate tip split quickly with this calculator.",
        "resultLabel": "Tip Split",
        "description": "Estimate tip split quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Tip Split Guide",
            "bullets": [
                "Estimate tip split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "party-planner-calculator": {
        "title": "Party Planner Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate party planner quickly with this calculator.",
        "resultLabel": "Party Planner",
        "description": "Estimate party planner quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Party Planner Guide",
            "bullets": [
                "Estimate party planner in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "wedding-budget-calculator": {
        "title": "Wedding Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate wedding budget quickly with this calculator.",
        "resultLabel": "Wedding Budget",
        "description": "Estimate wedding budget quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Wedding Budget Guide",
            "bullets": [
                "Estimate wedding budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "vacation-budget-calculator": {
        "title": "Vacation Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate vacation budget quickly with this calculator.",
        "resultLabel": "Vacation Budget",
        "description": "Estimate vacation budget quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Vacation Budget Guide",
            "bullets": [
                "Estimate vacation budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "trip-split-calculator": {
        "title": "Trip Split Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate trip split quickly with this calculator.",
        "resultLabel": "Trip Split",
        "description": "Estimate trip split quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Trip Split Guide",
            "bullets": [
                "Estimate trip split in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "recipe-batch-calculator": {
        "title": "Recipe Batch Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate recipe batch quickly with this calculator.",
        "resultLabel": "Recipe Batch",
        "description": "Estimate recipe batch quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Recipe Batch Guide",
            "bullets": [
                "Estimate recipe batch in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "workout-schedule-calculator": {
        "title": "Workout Schedule Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate workout schedule quickly with this calculator.",
        "resultLabel": "Workout Schedule",
        "description": "Estimate workout schedule quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Workout Schedule Guide",
            "bullets": [
                "Estimate workout schedule in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "school-schedule-calculator": {
        "title": "School Schedule Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate school schedule quickly with this calculator.",
        "resultLabel": "School Schedule",
        "description": "Estimate school schedule quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "School Schedule Guide",
            "bullets": [
                "Estimate school schedule in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "homework-time-calculator": {
        "title": "Homework Time Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate homework time quickly with this calculator.",
        "resultLabel": "Homework Time",
        "description": "Estimate homework time quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Homework Time Guide",
            "bullets": [
                "Estimate homework time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "exam-countdown-calculator": {
        "title": "Exam Countdown Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate exam countdown quickly with this calculator.",
        "resultLabel": "Exam Countdown",
        "description": "Estimate exam countdown quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Exam Countdown Guide",
            "bullets": [
                "Estimate exam countdown in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "project-timeline-calculator": {
        "title": "Project Timeline Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate project timeline quickly with this calculator.",
        "resultLabel": "Project Timeline",
        "description": "Estimate project timeline quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Project Timeline Guide",
            "bullets": [
                "Estimate project timeline in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "time-blocking-calculator": {
        "title": "Time Blocking Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate time blocking quickly with this calculator.",
        "resultLabel": "Time Blocking",
        "description": "Estimate time blocking quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Time Blocking Guide",
            "bullets": [
                "Estimate time blocking in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "weekly-planner-calculator": {
        "title": "Weekly Planner Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate weekly planner quickly with this calculator.",
        "resultLabel": "Weekly Planner",
        "description": "Estimate weekly planner quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Weekly Planner Guide",
            "bullets": [
                "Estimate weekly planner in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "monthly-planner-calculator": {
        "title": "Monthly Planner Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate monthly planner quickly with this calculator.",
        "resultLabel": "Monthly Planner",
        "description": "Estimate monthly planner quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Monthly Planner Guide",
            "bullets": [
                "Estimate monthly planner in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "savings-challenge-calculator": {
        "title": "Savings Challenge Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate savings challenge quickly with this calculator.",
        "resultLabel": "Savings Challenge",
        "description": "Estimate savings challenge quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Savings Challenge Guide",
            "bullets": [
                "Estimate savings challenge in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "habit-tracker-calculator": {
        "title": "Habit Tracker Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate habit tracker quickly with this calculator.",
        "resultLabel": "Habit Tracker",
        "description": "Estimate habit tracker quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Habit Tracker Guide",
            "bullets": [
                "Estimate habit tracker in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "break-timer-calculator": {
        "title": "Break Timer Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate break timer quickly with this calculator.",
        "resultLabel": "Break Timer",
        "description": "Estimate break timer quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Break Timer Guide",
            "bullets": [
                "Estimate break timer in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "phone-usage-calculator": {
        "title": "Phone Usage Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate phone usage quickly with this calculator.",
        "resultLabel": "Phone Usage",
        "description": "Estimate phone usage quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Phone Usage Guide",
            "bullets": [
                "Estimate phone usage in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "screen-time-calculator": {
        "title": "Screen Time Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate screen time quickly with this calculator.",
        "resultLabel": "Screen Time",
        "description": "Estimate screen time quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Screen Time Guide",
            "bullets": [
                "Estimate screen time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "travel-budget-calculator": {
        "title": "Travel Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate travel budget quickly with this calculator.",
        "resultLabel": "Travel Budget",
        "description": "Estimate travel budget quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Travel Budget Guide",
            "bullets": [
                "Estimate travel budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "fuel-budget-calculator": {
        "title": "Fuel Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate fuel budget quickly with this calculator.",
        "resultLabel": "Fuel Budget",
        "description": "Estimate fuel budget quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Fuel Budget Guide",
            "bullets": [
                "Estimate fuel budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "delivery-fee-calculator": {
        "title": "Delivery Fee Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate delivery fee quickly with this calculator.",
        "resultLabel": "Delivery Fee",
        "description": "Estimate delivery fee quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Delivery Fee Guide",
            "bullets": [
                "Estimate delivery fee in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "bill-due-calculator": {
        "title": "Bill Due Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate bill due quickly with this calculator.",
        "resultLabel": "Bill Due",
        "description": "Estimate bill due quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Bill Due Guide",
            "bullets": [
                "Estimate bill due in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "warranty-timer-calculator": {
        "title": "Warranty Timer Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate warranty timer quickly with this calculator.",
        "resultLabel": "Warranty Timer",
        "description": "Estimate warranty timer quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Warranty Timer Guide",
            "bullets": [
                "Estimate warranty timer in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "subscription-cost-calculator": {
        "title": "Subscription Cost Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate subscription cost quickly with this calculator.",
        "resultLabel": "Subscription Cost",
        "description": "Estimate subscription cost quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Subscription Cost Guide",
            "bullets": [
                "Estimate subscription cost in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "currency-converter-calculator": {
        "title": "Currency Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate currency converter quickly with this calculator.",
        "resultLabel": "Currency Converter",
        "description": "Estimate currency converter quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Currency Converter Guide",
            "bullets": [
                "Estimate currency converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "distance-converter-calculator": {
        "title": "Distance Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate distance converter quickly with this calculator.",
        "resultLabel": "Distance Converter",
        "description": "Estimate distance converter quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Distance Converter Guide",
            "bullets": [
                "Estimate distance converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "height-converter-calculator": {
        "title": "Height Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate height converter quickly with this calculator.",
        "resultLabel": "Height Converter",
        "description": "Estimate height converter quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Height Converter Guide",
            "bullets": [
                "Estimate height converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "weight-to-bmi-calculator": {
        "title": "Weight to BMI Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate weight to bmi quickly with this calculator.",
        "resultLabel": "Weight to BMI",
        "description": "Estimate weight to bmi quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Weight to BMI Guide",
            "bullets": [
                "Estimate weight to bmi in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "length-to-area-calculator": {
        "title": "Length to Area Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate length to area quickly with this calculator.",
        "resultLabel": "Length to Area",
        "description": "Estimate length to area quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Length to Area Guide",
            "bullets": [
                "Estimate length to area in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "speed-to-pace-calculator": {
        "title": "Speed to Pace Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate speed to pace quickly with this calculator.",
        "resultLabel": "Speed to Pace",
        "description": "Estimate speed to pace quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Speed to Pace Guide",
            "bullets": [
                "Estimate speed to pace in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "temperature-shift-calculator": {
        "title": "Temperature Shift Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate temperature shift quickly with this calculator.",
        "resultLabel": "Temperature Shift",
        "description": "Estimate temperature shift quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Temperature Shift Guide",
            "bullets": [
                "Estimate temperature shift in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cooking-measure-calculator": {
        "title": "Cooking Measure Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate cooking measure quickly with this calculator.",
        "resultLabel": "Cooking Measure",
        "description": "Estimate cooking measure quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Cooking Measure Guide",
            "bullets": [
                "Estimate cooking measure in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "time-zone-converter-calculator": {
        "title": "Time Zone Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate time zone converter quickly with this calculator.",
        "resultLabel": "Time Zone Converter",
        "description": "Estimate time zone converter quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Time Zone Converter Guide",
            "bullets": [
                "Estimate time zone converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "calendar-converter-calculator": {
        "title": "Calendar Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate calendar converter quickly with this calculator.",
        "resultLabel": "Calendar Converter",
        "description": "Estimate calendar converter quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Calendar Converter Guide",
            "bullets": [
                "Estimate calendar converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "money-to-time-calculator": {
        "title": "Money to Time Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate money to time quickly with this calculator.",
        "resultLabel": "Money to Time",
        "description": "Estimate money to time quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Money to Time Guide",
            "bullets": [
                "Estimate money to time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "voltage-converter-calculator": {
        "title": "Voltage Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate voltage converter quickly with this calculator.",
        "resultLabel": "Voltage Converter",
        "description": "Estimate voltage converter quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Voltage Converter Guide",
            "bullets": [
                "Estimate voltage converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "current-converter-calculator": {
        "title": "Current Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate current converter quickly with this calculator.",
        "resultLabel": "Current Converter",
        "description": "Estimate current converter quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Current Converter Guide",
            "bullets": [
                "Estimate current converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "resistance-converter-calculator": {
        "title": "Resistance Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate resistance converter quickly with this calculator.",
        "resultLabel": "Resistance Converter",
        "description": "Estimate resistance converter quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Resistance Converter Guide",
            "bullets": [
                "Estimate resistance converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "power-to-energy-calculator": {
        "title": "Power to Energy Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate power to energy quickly with this calculator.",
        "resultLabel": "Power to Energy",
        "description": "Estimate power to energy quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Power to Energy Guide",
            "bullets": [
                "Estimate power to energy in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "fuel-cost-per-km-calculator": {
        "title": "Fuel Cost per Km Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate fuel cost per km quickly with this calculator.",
        "resultLabel": "Fuel Cost per Km",
        "description": "Estimate fuel cost per km quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Fuel Cost per Km Guide",
            "bullets": [
                "Estimate fuel cost per km in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "water-volume-calculator": {
        "title": "Water Volume Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate water volume quickly with this calculator.",
        "resultLabel": "Water Volume",
        "description": "Estimate water volume quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Water Volume Guide",
            "bullets": [
                "Estimate water volume in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "paint-coverage-calculator": {
        "title": "Paint Coverage Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate paint coverage quickly with this calculator.",
        "resultLabel": "Paint Coverage",
        "description": "Estimate paint coverage quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Paint Coverage Guide",
            "bullets": [
                "Estimate paint coverage in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "storage-speed-calculator": {
        "title": "Storage Speed Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate storage speed quickly with this calculator.",
        "resultLabel": "Storage Speed",
        "description": "Estimate storage speed quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Storage Speed Guide",
            "bullets": [
                "Estimate storage speed in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "data-transfer-calculator": {
        "title": "Data Transfer Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate data transfer quickly with this calculator.",
        "resultLabel": "Data Transfer",
        "description": "Estimate data transfer quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Data Transfer Guide",
            "bullets": [
                "Estimate data transfer in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "screen-size-calculator": {
        "title": "Screen Size Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate screen size quickly with this calculator.",
        "resultLabel": "Screen Size",
        "description": "Estimate screen size quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Screen Size Guide",
            "bullets": [
                "Estimate screen size in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "aspect-ratio-calculator": {
        "title": "Aspect Ratio Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate aspect ratio quickly with this calculator.",
        "resultLabel": "Aspect Ratio",
        "description": "Estimate aspect ratio quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Aspect Ratio Guide",
            "bullets": [
                "Estimate aspect ratio in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "pixel-density-calculator": {
        "title": "Pixel Density Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate pixel density quickly with this calculator.",
        "resultLabel": "Pixel Density",
        "description": "Estimate pixel density quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Pixel Density Guide",
            "bullets": [
                "Estimate pixel density in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "image-size-calculator": {
        "title": "Image Size Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate image size quickly with this calculator.",
        "resultLabel": "Image Size",
        "description": "Estimate image size quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Image Size Guide",
            "bullets": [
                "Estimate image size in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "audio-bitrate-calculator": {
        "title": "Audio Bitrate Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate audio bitrate quickly with this calculator.",
        "resultLabel": "Audio Bitrate",
        "description": "Estimate audio bitrate quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Audio Bitrate Guide",
            "bullets": [
                "Estimate audio bitrate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "video-bitrate-calculator": {
        "title": "Video Bitrate Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate video bitrate quickly with this calculator.",
        "resultLabel": "Video Bitrate",
        "description": "Estimate video bitrate quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Video Bitrate Guide",
            "bullets": [
                "Estimate video bitrate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "file-size-calculator": {
        "title": "File Size Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate file size quickly with this calculator.",
        "resultLabel": "File Size",
        "description": "Estimate file size quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "File Size Guide",
            "bullets": [
                "Estimate file size in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "bandwidth-calculator": {
        "title": "Bandwidth Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate bandwidth quickly with this calculator.",
        "resultLabel": "Bandwidth",
        "description": "Estimate bandwidth quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Bandwidth Guide",
            "bullets": [
                "Estimate bandwidth in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "battery-life-calculator": {
        "title": "Battery Life Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate battery life quickly with this calculator.",
        "resultLabel": "Battery Life",
        "description": "Estimate battery life quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Battery Life Guide",
            "bullets": [
                "Estimate battery life in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "signal-strength-calculator": {
        "title": "Signal Strength Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate signal strength quickly with this calculator.",
        "resultLabel": "Signal Strength",
        "description": "Estimate signal strength quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Signal Strength Guide",
            "bullets": [
                "Estimate signal strength in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "torque-converter-calculator": {
        "title": "Torque Converter Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate torque converter quickly with this calculator.",
        "resultLabel": "Torque Converter",
        "description": "Estimate torque converter quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Torque Converter Guide",
            "bullets": [
                "Estimate torque converter in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "pressure-to-depth-calculator": {
        "title": "Pressure to Depth Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate pressure to depth quickly with this calculator.",
        "resultLabel": "Pressure to Depth",
        "description": "Estimate pressure to depth quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Pressure to Depth Guide",
            "bullets": [
                "Estimate pressure to depth in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "flow-rate-calculator": {
        "title": "Flow Rate Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate flow rate quickly with this calculator.",
        "resultLabel": "Flow Rate",
        "description": "Estimate flow rate quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Flow Rate Guide",
            "bullets": [
                "Estimate flow rate in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "wind-speed-calculator": {
        "title": "Wind Speed Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate wind speed quickly with this calculator.",
        "resultLabel": "Wind Speed",
        "description": "Estimate wind speed quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Wind Speed Guide",
            "bullets": [
                "Estimate wind speed in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "altitude-calculator": {
        "title": "Altitude Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate altitude quickly with this calculator.",
        "resultLabel": "Altitude",
        "description": "Estimate altitude quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Altitude Guide",
            "bullets": [
                "Estimate altitude in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "cooking-temperature-calculator": {
        "title": "Cooking Temperature Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate cooking temperature quickly with this calculator.",
        "resultLabel": "Cooking Temperature",
        "description": "Estimate cooking temperature quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Cooking Temperature Guide",
            "bullets": [
                "Estimate cooking temperature in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "baking-time-calculator": {
        "title": "Baking Time Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate baking time quickly with this calculator.",
        "resultLabel": "Baking Time",
        "description": "Estimate baking time quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Baking Time Guide",
            "bullets": [
                "Estimate baking time in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "lighting-lux-calculator": {
        "title": "Lighting Lux Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate lighting lux quickly with this calculator.",
        "resultLabel": "Lighting Lux",
        "description": "Estimate lighting lux quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Lighting Lux Guide",
            "bullets": [
                "Estimate lighting lux in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "sound-level-calculator": {
        "title": "Sound Level Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate sound level quickly with this calculator.",
        "resultLabel": "Sound Level",
        "description": "Estimate sound level quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Sound Level Guide",
            "bullets": [
                "Estimate sound level in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "brightness-calculator": {
        "title": "Brightness Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate brightness quickly with this calculator.",
        "resultLabel": "Brightness",
        "description": "Estimate brightness quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Brightness Guide",
            "bullets": [
                "Estimate brightness in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "torque-to-power-calculator": {
        "title": "Torque to Power Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate torque to power quickly with this calculator.",
        "resultLabel": "Torque to Power",
        "description": "Estimate torque to power quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Torque to Power Guide",
            "bullets": [
                "Estimate torque to power in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "gear-ratio-calculator": {
        "title": "Gear Ratio Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate gear ratio quickly with this calculator.",
        "resultLabel": "Gear Ratio",
        "description": "Estimate gear ratio quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Gear Ratio Guide",
            "bullets": [
                "Estimate gear ratio in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "mileage-calculator": {
        "title": "Mileage Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate mileage quickly with this calculator.",
        "resultLabel": "Mileage",
        "description": "Estimate mileage quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Mileage Guide",
            "bullets": [
                "Estimate mileage in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "fuel-economy-calculator": {
        "title": "Fuel Economy Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate fuel economy quickly with this calculator.",
        "resultLabel": "Fuel Economy",
        "description": "Estimate fuel economy quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Fuel Economy Guide",
            "bullets": [
                "Estimate fuel economy in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "price-per-unit-calculator": {
        "title": "Price per Unit Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate price per unit quickly with this calculator.",
        "resultLabel": "Price per Unit",
        "description": "Estimate price per unit quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Price per Unit Guide",
            "bullets": [
                "Estimate price per unit in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "packing-density-calculator": {
        "title": "Packing Density Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate packing density quickly with this calculator.",
        "resultLabel": "Packing Density",
        "description": "Estimate packing density quickly with this calculator.",
        "template": "ratio",
        "inputs": [
            {
                "id": "numerator",
                "label": "Numerator",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "denominator",
                "label": "Denominator",
                "type": "number",
                "unit": "",
                "value": 250,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "ratio",
                "label": "Ratio",
                "format": "number"
            },
            {
                "id": "percent",
                "label": "Percent",
                "format": "percent"
            }
        ],
        "mainOutput": "ratio",
        "seo": {
            "title": "Packing Density Guide",
            "bullets": [
                "Estimate packing density in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "paper-size-calculator": {
        "title": "Paper Size Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate paper size quickly with this calculator.",
        "resultLabel": "Paper Size",
        "description": "Estimate paper size quickly with this calculator.",
        "template": "percentage",
        "inputs": [
            {
                "id": "base",
                "label": "Base Value",
                "type": "number",
                "unit": "",
                "value": 200,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "percent",
                "label": "Percent",
                "type": "number",
                "unit": "%",
                "value": 15,
                "step": "0.1",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "portion",
                "label": "Portion",
                "format": "number"
            },
            {
                "id": "total",
                "label": "Total",
                "format": "number"
            }
        ],
        "mainOutput": "portion",
        "seo": {
            "title": "Paper Size Guide",
            "bullets": [
                "Estimate paper size in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "thread-count-calculator": {
        "title": "Thread Count Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate thread count quickly with this calculator.",
        "resultLabel": "Thread Count",
        "description": "Estimate thread count quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Thread Count Guide",
            "bullets": [
                "Estimate thread count in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "textile-weight-calculator": {
        "title": "Textile Weight Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate textile weight quickly with this calculator.",
        "resultLabel": "Textile Weight",
        "description": "Estimate textile weight quickly with this calculator.",
        "template": "difference",
        "inputs": [
            {
                "id": "valueA",
                "label": "Value A",
                "type": "number",
                "unit": "",
                "value": 120,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "valueB",
                "label": "Value B",
                "type": "number",
                "unit": "",
                "value": 100,
                "step": "0.01",
                "min": 0
            }
        ],
        "outputs": [
            {
                "id": "difference",
                "label": "Difference",
                "format": "number"
            },
            {
                "id": "percentChange",
                "label": "Percent Change",
                "format": "percent"
            }
        ],
        "mainOutput": "difference",
        "seo": {
            "title": "Textile Weight Guide",
            "bullets": [
                "Estimate textile weight in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "shipping-volume-calculator": {
        "title": "Shipping Volume Calculator",
        "category": "Converters",
        "icon": "fa-arrows-rotate",
        "tagline": "Estimate shipping volume quickly with this calculator.",
        "resultLabel": "Shipping Volume",
        "description": "Estimate shipping volume quickly with this calculator.",
        "template": "growth",
        "inputs": [
            {
                "id": "start",
                "label": "Starting Value",
                "type": "number",
                "unit": "",
                "value": 1000,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "rate",
                "label": "Growth Rate",
                "type": "number",
                "unit": "%",
                "value": 5,
                "step": "0.1",
                "min": 0
            },
            {
                "id": "periods",
                "label": "Periods",
                "type": "number",
                "unit": "",
                "value": 12,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "future",
                "label": "Future Value",
                "format": "number"
            },
            {
                "id": "growth",
                "label": "Total Growth",
                "format": "number"
            }
        ],
        "mainOutput": "future",
        "seo": {
            "title": "Shipping Volume Guide",
            "bullets": [
                "Estimate shipping volume in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    },
    "seasonal-budget-calculator": {
        "title": "Seasonal Budget Calculator",
        "category": "Everyday Life",
        "icon": "fa-calendar-day",
        "tagline": "Estimate seasonal budget quickly with this calculator.",
        "resultLabel": "Seasonal Budget",
        "description": "Estimate seasonal budget quickly with this calculator.",
        "template": "perUnit",
        "inputs": [
            {
                "id": "total",
                "label": "Total",
                "type": "number",
                "unit": "",
                "value": 500,
                "step": "0.01",
                "min": 0
            },
            {
                "id": "units",
                "label": "Units",
                "type": "number",
                "unit": "",
                "value": 10,
                "step": "1",
                "min": 1
            }
        ],
        "outputs": [
            {
                "id": "perUnit",
                "label": "Per Unit",
                "format": "number"
            },
            {
                "id": "inverse",
                "label": "Units per Total",
                "format": "number"
            }
        ],
        "mainOutput": "perUnit",
        "seo": {
            "title": "Seasonal Budget Guide",
            "bullets": [
                "Estimate seasonal budget in seconds.",
                "Compare scenarios quickly.",
                "Use results to plan ahead."
            ]
        }
    }
};
const registerExtra = () => { if (window.registerExtraTools) { window.registerExtraTools(window.EXTRA_CALCULATORS); } };
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', registerExtra); } else { registerExtra(); }
