/* ==========================================================================
   App Functions
   ========================================================================== */

// Calculate Weekly Spending
function wkTotalSpending() {
    for (var property in budget) {
        var transactionTotal = 0;
        for (var i=0; i<budget[property].transactions.length; i++) {
            transactionTotal += budget[property].transactions[i];
        }
        budget[property].wkTotalSpent = transactionTotal;
    }
}

// Determine Budget Remaining
function detBudgetRemain() {
    for (var property in budget) {
        budget[property].budgetRemain = budget[property].budgetStart - budget[property].wkTotalSpent;
    }
}