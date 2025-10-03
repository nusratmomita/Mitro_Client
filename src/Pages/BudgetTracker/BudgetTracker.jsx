import React, { useState } from 'react';
import { Target, TrendingUp, PiggyBank, Calendar, Plus, Trash2, AlertCircle } from 'lucide-react';

export default function BudgetPlanningForm() {
  const [planName, setPlanName] = useState('');
  const [duration, setDuration] = useState('monthly');
  const [totalIncome, setTotalIncome] = useState('');
  const [savingsGoal, setSavingsGoal] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, category: '', amount: '', priority: 'medium' }
  ]);

  const expenseCategories = [
    'Food & Dining',
    'Transportation',
    'Books & Supplies',
    'Entertainment',
    'Housing',
    'Utilities',
    'Healthcare',
    'Personal Care',
    'Clothing',
    'Subscriptions',
    'Other'
  ];

  const addExpense = () => {
    setExpenses([
      ...expenses,
      { id: Date.now(), category: '', amount: '', priority: 'medium' }
    ]);
  };

  const removeExpense = (id) => {
    if (expenses.length > 1) {
      setExpenses(expenses.filter(exp => exp.id !== id));
    }
  };

  const updateExpense = (id, field, value) => {
    setExpenses(expenses.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const totalExpenses = expenses.reduce((sum, exp) => 
    sum + (parseFloat(exp.amount) || 0), 0
  );

  const remainingBudget = (parseFloat(totalIncome) || 0) - totalExpenses - (parseFloat(savingsGoal) || 0);

  const handleSubmit = () => {
    if (!planName || !totalIncome) {
      alert('Please fill in plan name and total income');
      return;
    }

    const budgetPlan = {
      planName,
      duration,
      totalIncome: parseFloat(totalIncome),
      savingsGoal: parseFloat(savingsGoal) || 0,
      expenses: expenses.filter(exp => exp.category && exp.amount),
      totalExpenses,
      remainingBudget,
      createdAt: new Date().toISOString()
    };

    console.log('Budget Plan Created:', budgetPlan);
    alert(`Budget plan "${planName}" created successfully!`);
    
    // Reset form
    setPlanName('');
    setDuration('monthly');
    setTotalIncome('');
    setSavingsGoal('');
    setExpenses([{ id: Date.now(), category: '', amount: '', priority: 'medium' }]);
  };

  return (
    <div className="mt-30 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Target className="w-10 h-10 text-green-800" />
            <h1 className="text-4xl font-bold text-green-800">Budget Planning</h1>
          </div>
          <p className="text-green-900">Create a detailed budget plan for your finances</p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
          
          {/* Basic Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-green-900/90 mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-green-900/90" />
              Basic Information
            </h2>
            
            <div className="space-y-5">
              {/* Plan Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Plan Name <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                  placeholder="e.g., Fall Semester 2025, Monthly Budget Oct"
                  className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Planning Duration <span className='text-red-600'>*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['weekly', 'monthly', 'semester'].map(dur => (
                    <button
                      key={dur}
                      type="button"
                      onClick={() => setDuration(dur)}
                      className={`cursor-pointer py-3 px-4 rounded-lg font-medium capitalize transition-all ${
                        duration === dur
                          ? 'bg-green-700 text-white text-xl shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Income & Savings Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-green-800/90 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-900/90" />
              Income & Savings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Total Income */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Total Expected Income (৳) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={totalIncome}
                  onChange={(e) => setTotalIncome(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">Include all sources: allowance, job, etc.</p>
              </div>

              {/* Savings Goal */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <PiggyBank className="w-4 h-4 text-pink-500" />
                  Savings Goal (৳)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={savingsGoal}
                  onChange={(e) => setSavingsGoal(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">Amount you want to save</p>
              </div>
            </div>
          </div>

          {/* Planned Expenses Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                Planned Expenses
              </h2>
              <button
                onClick={addExpense}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-md"
              >
                <Plus className="w-4 h-4" />
                Add Expense
              </button>
            </div>

            <div className="space-y-4">
              {expenses.map((expense) => (
                <div key={expense.id} className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Category */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          value={expense.category}
                          onChange={(e) => updateExpense(expense.id, 'category', e.target.value)}
                          className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
                        >
                          <option value="">Select category</option>
                          {expenseCategories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      {/* Amount */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">
                          Amount (৳) *
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={expense.amount}
                          onChange={(e) => updateExpense(expense.id, 'amount', e.target.value)}
                          placeholder="0.00"
                          className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
                        />
                      </div>

                      {/* Priority */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">
                          Priority
                        </label>
                        <select
                          value={expense.priority}
                          onChange={(e) => updateExpense(expense.id, 'priority', e.target.value)}
                          className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
                        >
                          <option value="high">High (Essential)</option>
                          <option value="medium">Medium (Important)</option>
                          <option value="low">Low (Optional)</option>
                        </select>
                      </div>
                    </div>

                    {/* Remove Button */}
                    {expenses.length > 1 && (
                      <button
                        onClick={() => removeExpense(expense.id)}
                        className="mt-7 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        title="Remove expense"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Priority Badge */}
                  <div className="mt-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      expense.priority === 'high' 
                        ? 'bg-red-100 text-red-700'
                        : expense.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {expense.priority === 'high' ? '⚠️ Essential' : expense.priority === 'medium' ? '📌 Important' : '✨ Optional'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Summary */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-6 border-2 border-indigo-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Total Income:</span>
                <span className="text-xl font-bold text-green-600">৳{(parseFloat(totalIncome) || 0).toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Planned Expenses:</span>
                <span className="text-xl font-bold text-red-600">৳{totalExpenses.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Savings Goal:</span>
                <span className="text-xl font-bold text-blue-600">৳{(parseFloat(savingsGoal) || 0).toFixed(2)}</span>
              </div>
              
              <div className="border-t-2 border-indigo-300 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Remaining Balance:</span>
                  <span className={`text-2xl font-bold ${remainingBudget >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ৳{remainingBudget.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {remainingBudget < 0 && (
              <div className="mt-4 flex items-start gap-2 bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">
                  Your planned expenses and savings exceed your income by ৳{Math.abs(remainingBudget).toFixed(2)}. 
                  Consider adjusting your plan.
                </p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Create Budget Plan
          </button>
        </div>

        {/* Tips Card */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-indigo-100">
          <h3 className="font-semibold text-gray-800 mb-3">💡 Budget Planning Tips</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings</li>
            <li>• Always prioritize essential expenses (housing, food, education)</li>
            <li>• Set realistic savings goals that you can actually achieve</li>
            <li>• Review and adjust your budget regularly based on actual spending</li>
          </ul>
        </div>
      </div>
    </div>
  );
}