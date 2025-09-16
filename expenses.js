
// Expenses page JavaScript with Chart.js integration

// Raw expense data from the provided CSV
const expenseData = [
    { date: '09/14/2025 09:04:42', subcategory: 'Taxi', note: 'Taxi to Novotel', description: '', amount: 27000, currency: 'IDR', account: 1.69, mySplit: 9000, paidBack: 18000 },
    { date: '09/13/2025 17:15:27', subcategory: 'Taxi', note: 'Taxi from mall to hotel', description: '', amount: 92000, currency: 'IDR', account: 5.75, mySplit: 30700, paidBack: 61300 },
    { date: '09/13/2025 15:40:53', subcategory: 'Food', note: 'Sugarcane juice', description: '', amount: 5.6, currency: 'USD', account: 5.6, mySplit: 1.87, paidBack: 3.73 },
    { date: '09/13/2025 15:40:53', subcategory: 'Food', note: 'Bakso soup', description: '', amount: 9, currency: 'USD', account: 9, mySplit: 3, paidBack: 6 },
    { date: '09/13/2025 15:26:15', subcategory: 'Souvenirs', note: 'Magnets, tea, coffee, flute', description: '', amount: 25.45, currency: 'USD', account: 25.45, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 13:52:40', subcategory: 'Food', note: 'Spinach pie', description: '', amount: 2.99, currency: 'USD', account: 2.99, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 13:28:32', subcategory: 'Souvenirs', note: 'Chocolate, cashews', description: '', amount: 251000, currency: 'IDR', account: 15.69, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 13:04:38', subcategory: 'Souvenirs', note: 'Ginger tea drink', description: '', amount: 220000, currency: 'IDR', account: 13.75, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 13:04:02', subcategory: 'Food', note: 'Ambarella drink', description: '', amount: 45000, currency: 'IDR', account: 2.81, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 12:36:32', subcategory: 'Taxi', note: 'Taxi to Grand Indonesia mall', description: '', amount: 30000, currency: 'IDR', account: 1.88, mySplit: 10000, paidBack: 20000 },
    { date: '09/13/2025 11:40:56', subcategory: 'Food', note: 'Giyanti coffee roastery', description: 'Breakfast in Jakarta', amount: 100000, currency: 'IDR', account: 6.25, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 11:26:41', subcategory: 'Taxi', note: 'Moto to cafe', description: '', amount: 20000, currency: 'IDR', account: 1.25, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 11:06:30', subcategory: 'Food', note: 'Craffle waffle', description: '', amount: 18000, currency: 'IDR', account: 1.13, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 11:06:12', subcategory: 'Taxi', note: 'Moto to Atrium mall', description: '', amount: 17000, currency: 'IDR', account: 1.06, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 10:30:39', subcategory: 'Hotel', note: 'Hotel in Jakarta', description: 'Acacia hotel, Jakarta', amount: 34.22, currency: 'USD', account: 34.22, mySplit: 0, paidBack: 0 },
    { date: '09/13/2025 00:41:09', subcategory: 'Taxi', note: 'Taxi to Novotel', description: '', amount: 140000, currency: 'IDR', account: 8.75, mySplit: 46700, paidBack: 93300 },
    { date: '09/12/2025 22:55:18', subcategory: 'Food', note: 'Congee', description: '', amount: 456550, currency: 'IDR', account: 28.53, mySplit: 152200, paidBack: 304350 },
    { date: '09/12/2025 22:07:22', subcategory: 'Hotel', note: 'Hotel in Jakarta', description: 'Acacia hotel, Jakarta', amount: 33.6, currency: 'USD', account: 33.6, mySplit: 0, paidBack: 0 },
    { date: '09/12/2025 21:18:52', subcategory: 'Taxi', note: 'Gojek taxi from airport to pagi sore pik', description: '', amount: 244500, currency: 'IDR', account: 15.28, mySplit: 81500, paidBack: 163000 },
    { date: '09/12/2025 16:35:25', subcategory: 'Food', note: 'Sandwich on the beach', description: '', amount: 85000, currency: 'IDR', account: 5.31, mySplit: 28300, paidBack: 56700 },
    { date: '09/12/2025 16:34:35', subcategory: 'Taxi', note: 'Private driver to Uluwatu and airport', description: '', amount: 700000, currency: 'IDR', account: 43.75, mySplit: 233300, paidBack: 466700 },
    { date: '09/12/2025 14:02:18', subcategory: 'Entertainment', note: 'Uluwatu', description: 'Uluwatu tour guide', amount: 150000, currency: 'IDR', account: 9.38, mySplit: 50000, paidBack: 100000 },
    { date: '09/12/2025 11:07:02', subcategory: 'Entertainment', note: 'Tanah Barat', description: 'Shuttle to Tanah Barat', amount: 90000, currency: 'IDR', account: 5.63, mySplit: 30000, paidBack: 60000 },
    { date: '09/12/2025 10:56:28', subcategory: 'Entertainment', note: 'Pandawa Beach', description: 'Pandawa beach entrance', amount: 50000, currency: 'IDR', account: 3.13, mySplit: 16700, paidBack: 33300 },
    { date: '09/12/2025 07:31:06', subcategory: 'Taxi', note: 'Taxi to new hotel on Sanur', description: '', amount: 22000, currency: 'IDR', account: 1.38, mySplit: 7300, paidBack: 14700 },
    { date: '09/12/2025 07:30:42', subcategory: 'Taxi', note: 'Taxi from Icon mall to hotel', description: '', amount: 26000, currency: 'IDR', account: 1.63, mySplit: 8700, paidBack: 17300 },
    { date: '09/12/2025 07:30:20', subcategory: 'Food', note: 'Soul on the Beach', description: 'Drinks on Sanur beach', amount: 285000, currency: 'IDR', account: 17.81, mySplit: 95000, paidBack: 190000 },
    { date: '09/12/2025 07:30:04', subcategory: 'Taxi', note: 'Personal driver on Nusa Penida', description: '', amount: 900000, currency: 'IDR', account: 56.25, mySplit: 300000, paidBack: 600000 },
    { date: '09/12/2025 07:28:54', subcategory: 'Food', note: 'Golden Monkey Chinese restaurant', description: 'Dinner at Sanur', amount: 375100, currency: 'IDR', account: 23.44, mySplit: 125000, paidBack: 250100 },
    { date: '09/12/2025 07:25:13', subcategory: 'Entertainment', note: 'Diamond Beach', description: 'Diamond beach entrance for 4', amount: 180000, currency: 'IDR', account: 11.25, mySplit: 60000, paidBack: 120000 },
    { date: '09/11/2025 19:22:24', subcategory: 'Hotel', note: 'Hotel in Sanur', description: 'NeoBintang, Sanur', amount: 33.34, currency: 'USD', account: 33.34, mySplit: 0, paidBack: 0 },
    { date: '09/11/2025 12:43:40', subcategory: 'Food', note: 'Ice cream', description: '', amount: 53000, currency: 'IDR', account: 3.31, mySplit: 0, paidBack: 0 },
    { date: '09/11/2025 11:28:54', subcategory: 'Food', note: 'Pocari', description: '', amount: 8000, currency: 'IDR', account: 0.5, mySplit: 0, paidBack: 0 },
    { date: '09/11/2025 11:06:26', subcategory: 'Taxi', note: 'To Sanur port', description: '', amount: 70000, currency: 'IDR', account: 4.38, mySplit: 23300, paidBack: 46700 },
    { date: '09/11/2025 11:04:55', subcategory: 'Entertainment', note: 'Nusa Penida', description: 'Nusa Penida entrance', amount: 75000, currency: 'IDR', account: 4.69, mySplit: 25000, paidBack: 50000 },
    { date: '09/11/2025 08:38:09', subcategory: 'Taxi', note: 'Round-trip to Nusa Penida', description: '', amount: 1200000, currency: 'IDR', account: 75, mySplit: 400000, paidBack: 800000 },
    { date: '09/11/2025 07:43:03', subcategory: 'Food', note: 'Betewe Cafe', description: 'Breakfast at Sanur', amount: 461000, currency: 'IDR', account: 28.81, mySplit: 153700, paidBack: 307300 },
    { date: '09/10/2025 19:54:04', subcategory: 'Taxi', note: 'Ubud to Sanur', description: '', amount: 700000, currency: 'IDR', account: 43.75, mySplit: 233300, paidBack: 466700 },
    { date: '09/10/2025 19:48:56', subcategory: 'Food', note: 'Gangnam Korean BBQ', description: 'Dinner at Sanur', amount: 1166550, currency: 'IDR', account: 72.91, mySplit: 388900, paidBack: 777650 },
    { date: '09/10/2025 16:50:56', subcategory: 'Souvenirs', note: 'Hindu singing bowl', description: '', amount: 200000, currency: 'IDR', account: 12.5, mySplit: 0, paidBack: 0 },
    { date: '09/10/2025 16:50:37', subcategory: 'Souvenirs', note: 'Handicraft jewelry', description: '', amount: 100000, currency: 'IDR', account: 6.25, mySplit: 0, paidBack: 0 },
    { date: '09/10/2025 16:50:37', subcategory: 'Entertainment', note: 'Tirta Empul', description: 'Fish food for koi', amount: 15000, currency: 'IDR', account: 0.31, mySplit: 5000, paidBack: 10000 },
    { date: '09/10/2025 14:49:18', subcategory: 'Entertainment', note: 'Tirta Empul', description: 'Tirta empul holy spring entrance', amount: 225000, currency: 'IDR', account: 14.06, mySplit: 75000, paidBack: 150000 },
    { date: '09/10/2025 13:30:50', subcategory: 'Entertainment', note: 'Abian Desa Rice Terrances', description: 'Tegallalung rice fields', amount: 75000, currency: 'IDR', account: 4.69, mySplit: 25000, paidBack: 50000 },
    { date: '09/10/2025 13:06:30', subcategory: 'Food', note: 'Mixue', description: 'Tea', amount: 55000, currency: 'IDR', account: 3.44, mySplit: 18300, paidBack: 36700 },
    { date: '09/10/2025 12:51:23', subcategory: 'Souvenirs', note: 'White shell necklace', description: '', amount: 70000, currency: 'IDR', account: 4.38, mySplit: 0, paidBack: 0 },
    { date: '09/10/2025 12:48:04', subcategory: 'Souvenirs', note: 'Yin yang magnet', description: '', amount: 40000, currency: 'IDR', account: 2.5, mySplit: 0, paidBack: 0 },
    { date: '09/10/2025 12:47:42', subcategory: 'Entertainment', note: 'Sacred Monkey Forest', description: 'Sacred monkey forest entrance', amount: 300000, currency: 'IDR', account: 18.75, mySplit: 100000, paidBack: 200000 },
    { date: '09/10/2025 10:39:29', subcategory: 'Miscellaneous', note: 'Send key back to Tanah Lot', description: '', amount: 100000, currency: 'IDR', account: 6.25, mySplit: 0, paidBack: 0 },
    { date: '09/10/2025 09:11:09', subcategory: 'Food', note: 'Wabyu coffee and eatery', description: 'Breakfast in Ubud', amount: 394000, currency: 'IDR', account: 24.63, mySplit: 131300, paidBack: 262700 },
    { date: '09/10/2025 09:07:47', subcategory: 'Hotel', note: 'Hotel in Sanur', description: 'Palette Signature Bali, Sanur', amount: 30.22, currency: 'USD', account: 30.22, mySplit: 0, paidBack: 0 },
    { date: '09/09/2025 21:16:18', subcategory: 'Food', note: 'Nasi goreng and satay at hotel', description: '', amount: 115000, currency: 'IDR', account: 7.19, mySplit: 38300, paidBack: 76700 },
    { date: '09/09/2025 15:27:14', subcategory: 'Taxi', note: 'Taxi from Tana Lot to Ubud day tour', description: '', amount: 450000, currency: 'IDR', account: 28.13, mySplit: 150000, paidBack: 300000 },
    { date: '09/09/2025 14:51:49', subcategory: 'Food', note: 'Semar Kuning', description: 'Lunch on the way to Ubud', amount: 462000, currency: 'IDR', account: 28.88, mySplit: 154000, paidBack: 308000 },
    { date: '09/09/2025 14:07:02', subcategory: 'Hotel', note: 'Hotel in Ubud', description: 'Gusde Villa, Ubud', amount: 29.46, currency: 'USD', account: 29.46, mySplit: 0, paidBack: 0 },
    { date: '09/09/2025 13:27:24', subcategory: 'Food', note: 'Electrical adapter, drink', description: '', amount: 45000, currency: 'IDR', account: 2.81, mySplit: 0, paidBack: 0 },
    { date: '09/09/2025 11:40:25', subcategory: 'Entertainment', note: 'Taman Ayun', description: 'Taman Ayun temple entrance', amount: 90000, currency: 'IDR', account: 5.63, mySplit: 30000, paidBack: 60000 },
    { date: '09/09/2025 10:34:50', subcategory: 'Food', note: 'Abian Bali Lucky', description: 'Coffee, tea', amount: 140000, currency: 'IDR', account: 8.75, mySplit: 46700, paidBack: 93300 },
    { date: '09/09/2025 08:58:50', subcategory: 'Food', note: 'Breakfast at Tanah Lot', description: '', amount: 280000, currency: 'IDR', account: 17.5, mySplit: 93300, paidBack: 186700 },
    { date: '09/09/2025 07:42:46', subcategory: 'Entertainment', note: 'Tanah Lot', description: 'Tanah Lot temple entrance', amount: 230000, currency: 'IDR', account: 14.38, mySplit: 76700, paidBack: 153300 },
    { date: '09/08/2025 19:31:53', subcategory: 'Food', note: 'De Jukung Resto', description: 'Dinner at Tanah Lot', amount: 526350, currency: 'IDR', account: 32.9, mySplit: 175500, paidBack: 350850 },
    { date: '09/08/2025 18:20:46', subcategory: 'Taxi', note: 'Airport to Tanah Lot', description: '', amount: 450000, currency: 'IDR', account: 28.13, mySplit: 150000, paidBack: 300000 },
    { date: '09/08/2025 16:43:44', subcategory: 'Hotel', note: 'Hotel in Tanah Lot', description: 'Agung village hotel, Tanah Lot', amount: 30.7, currency: 'USD', account: 30.7, mySplit: 0, paidBack: 0 },
    { date: '09/08/2025 15:07:24', subcategory: 'Miscellaneous', note: 'Indonesia SIM card 21GB', description: '', amount: 250000, currency: 'IDR', account: 15.63, mySplit: 0, paidBack: 0 },
    { date: '09/07/2025 22:10:48', subcategory: 'Taxi', note: 'Hotel to airport', description: '', amount: 92000, currency: 'VND', account: 3.43, mySplit: 30700, paidBack: 61300 },
    { date: '09/07/2025 19:46:06', subcategory: 'Food', note: 'Sense market', description: 'Smoothie', amount: 50000, currency: 'VND', account: 1.86, mySplit: 0, paidBack: 0 },
    { date: '09/07/2025 18:08:36', subcategory: 'Food', note: 'El Gaucho Hai Ba Trung', description: 'Dinner at Ho Chi Minh', amount: 194400, currency: 'VND', account: 7.24, mySplit: 64800, paidBack: 129600 },
    { date: '09/07/2025 18:08:06', subcategory: 'Food', note: 'Bep Oc Seafood and Mexican', description: 'Dinner at Ho Chi Minh', amount: 612480, currency: 'VND', account: 22.81, mySplit: 204200, paidBack: 408280 },
    { date: '09/07/2025 16:32:55', subcategory: 'Taxi', note: 'Taxi to restaurant', description: '', amount: 32000, currency: 'VND', account: 1.19, mySplit: 10700, paidBack: 21300 },
    { date: '09/07/2025 16:32:55', subcategory: 'Food', note: 'Banh tranh', description: '', amount: 90000, currency: 'VND', account: 3.35, mySplit: 30000, paidBack: 60000 },
    { date: '09/07/2025 15:18:54', subcategory: 'Taxi', note: 'Taxi to Cafe Apartments', description: '', amount: 85000, currency: 'VND', account: 3.17, mySplit: 28300, paidBack: 56700 },
    { date: '09/07/2025 14:03:11', subcategory: 'Taxi', note: 'Airport to hotel', description: '', amount: 200000, currency: 'VND', account: 7.45, mySplit: 66700, paidBack: 133300 },
    { date: '09/07/2025 08:10:42', subcategory: 'Miscellaneous', note: 'Vietnam SIM card', description: '', amount: 5, currency: 'USD', account: 5, mySplit: 0, paidBack: 0 },
    { date: '09/05/2025 09:18:31', subcategory: 'Travel', note: 'Vietnam visa expedited 4-8 hours', description: '', amount: 90, currency: 'USD', account: 90, mySplit: 0, paidBack: 0 },
    { date: '09/04/2025 09:06:40', subcategory: 'Hotel', note: 'Hotel in HCM', description: 'Hotel Tala Saigon', amount: 13.62, currency: 'USD', account: 13.62, mySplit: 0, paidBack: 0 },
    { date: '09/02/2025 12:03:45', subcategory: 'Travel', note: 'Bus ticket to HCM', description: '', amount: 26.6, currency: 'USD', account: 26.6, mySplit: 0, paidBack: 0 },
    { date: '08/30/2025 14:07:08', subcategory: 'Travel', note: 'Visa for Indonesia', description: '', amount: 32.29, currency: 'USD', account: 32.29, mySplit: 0, paidBack: 0 },
    { date: '08/30/2025 11:05:50', subcategory: 'Travel', note: 'Visa to Vietnam', description: '', amount: 26.28, currency: 'USD', account: 26.28, mySplit: 0, paidBack: 0 },
    { date: '08/24/2025 20:48:36', subcategory: 'Travel', note: 'Ticket name amendment', description: '', amount: 17.9, currency: 'USD', account: 17.9, mySplit: 0, paidBack: 0 },
    { date: '08/23/2025 10:23:27', subcategory: 'Travel', note: 'Flight from JKT > PP', description: '', amount: 136.9, currency: 'USD', account: 136.9, mySplit: 0, paidBack: 0 },
    { date: '08/20/2025 22:52:25', subcategory: 'Travel', note: 'Flight from Bali > JKT', description: '', amount: 68.5, currency: 'USD', account: 68.5, mySplit: 0, paidBack: 0 },
    { date: '08/20/2025 22:52:25', subcategory: 'Travel', note: 'Flight from HCM > Bali', description: '', amount: 120, currency: 'USD', account: 120, mySplit: 0, paidBack: 0 }
];

// Global variables
let currentChart = null;
let filteredData = [...expenseData];
let currentTab = 'category';

// Initialize the expenses page
document.addEventListener('DOMContentLoaded', function() {
    processExpenseData();
    initializeSummaryCards();
    initializeFilters();
    initializeChartTabs();
    renderExpensesTable();
    renderChart('category');
});

// Process and normalize expense data
function processExpenseData() {
    expenseData.forEach(expense => {
        // Parse date
        expense.parsedDate = new Date(expense.date);
        expense.dayOfWeek = expense.parsedDate.toLocaleDateString('en-US', { weekday: 'long' });
        expense.shortDate = expense.parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        // Normalize USD amounts (use account field as USD equivalent)
        expense.usdAmount = expense.account;
        
        // Create display description
        expense.displayDescription = expense.description || expense.note;
    });
}

// Initialize summary cards
function initializeSummaryCards() {
    const totalAmount = expenseData.reduce((sum, expense) => sum + expense.usdAmount, 0);
    const paidBackAmount = expenseData.reduce((sum, expense) => {
        // Calculate what was paid back to me (2/3 of split expenses)
        if (expense.mySplit > 0) {
            return sum + (expense.usdAmount * 2/3);
        }
        return sum;
    }, 0);
    const transactionCount = expenseData.length;
    
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById('paid-back-amount').textContent = `$${paidBackAmount.toFixed(2)}`;
    document.getElementById('transaction-count').textContent = transactionCount;
}

// Initialize filter controls
function initializeFilters() {
    const categoryFilters = document.getElementById('category-filters');
    const dayFilters = document.getElementById('day-filters');
    const resetButton = document.getElementById('reset-filters');
    const exportButton = document.getElementById('export-csv');
    
    // Populate category filters (excluding "All")
    const categories = [...new Set(expenseData.map(expense => expense.subcategory))].sort();
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.dataset.category = category;
        button.textContent = category;
        button.addEventListener('click', () => filterByCategory(category));
        categoryFilters.appendChild(button);
    });
    
    // Populate day filters (excluding "All Days")
    const dates = [...new Set(expenseData.map(expense => expense.shortDate))].sort();
    dates.forEach(date => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.dataset.day = date;
        button.textContent = date;
        button.addEventListener('click', () => filterByDay(date));
        dayFilters.appendChild(button);
    });
    
    // Add event listeners
    resetButton.addEventListener('click', resetFilters);
    exportButton.addEventListener('click', exportToCSV);
}

// Filter by category
function filterByCategory(category) {
    // Update active button
    document.querySelectorAll('#category-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    applyFilters();
}

// Filter by day
function filterByDay(day) {
    // Update active button
    document.querySelectorAll('#day-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.day === day) {
            btn.classList.add('active');
        }
    });
    
    applyFilters();
}

// Apply filters to data
function applyFilters() {
    const activeCategories = Array.from(document.querySelectorAll('#category-filters .filter-btn.active')).map(btn => btn.dataset.category);
    const activeDays = Array.from(document.querySelectorAll('#day-filters .filter-btn.active')).map(btn => btn.dataset.day);
    
    filteredData = expenseData.filter(expense => {
        const categoryMatch = activeCategories.length === 0 || activeCategories.includes(expense.subcategory);
        const dayMatch = activeDays.length === 0 || activeDays.includes(expense.shortDate);
        return categoryMatch && dayMatch;
    });
    
    renderExpensesTable();
    renderChart(currentTab);
    updateTableSummary();
}

// Reset all filters
function resetFilters() {
    // Reset category filters
    document.querySelectorAll('#category-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset day filters
    document.querySelectorAll('#day-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    filteredData = [...expenseData];
    renderExpensesTable();
    renderChart(currentTab);
    updateTableSummary();
}

// Initialize chart tabs
function initializeChartTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Render new chart
            currentTab = this.dataset.tab;
            renderChart(currentTab);
        });
    });
}

// Render chart based on selected tab
function renderChart(type) {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    
    // Destroy existing chart
    if (currentChart) {
        currentChart.destroy();
    }
    
    let chartData, chartOptions;
    
    switch (type) {
        case 'category':
            chartData = getCategoryChartData();
            chartOptions = getChartOptions('Expenses by Category', 'doughnut');
            currentChart = new Chart(ctx, {
                type: 'doughnut',
                data: chartData,
                options: chartOptions
            });
            break;
            
        case 'daily':
            chartData = getDailyChartData();
            chartOptions = getChartOptions('Daily Expenses', 'bar');
            currentChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions
            });
            break;
            
        case 'currency':
            chartData = getCurrencyChartData();
            chartOptions = getChartOptions('Expenses by Currency', 'pie');
            currentChart = new Chart(ctx, {
                type: 'pie',
                data: chartData,
                options: chartOptions
            });
            break;
    }
}

// Get category chart data
function getCategoryChartData() {
    const categoryTotals = {};
    
    filteredData.forEach(expense => {
        categoryTotals[expense.subcategory] = (categoryTotals[expense.subcategory] || 0) + expense.usdAmount;
    });
    const colors = [
        '#e74c3c', '#3498db', '#9b59b6', '#f39c12', '#e67e22',
        '#1abc9c', '#95a5a6', '#2ecc71', '#f1c40f', '#e91e63',
        '#ff5722', '#607d8b', '#795548', '#009688', '#ff9800'
    ];
    
    const labels = Object.keys(categoryTotals);
    const data = Object.values(categoryTotals);
    
    return {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors.slice(0, labels.length),
            borderWidth: 2,
            borderColor: '#fff'
        }]
    };
}

// Get daily chart data
function getDailyChartData() {
    const dailyTotals = {};
    
    filteredData.forEach(expense => {
        const date = expense.shortDate;
        dailyTotals[date] = (dailyTotals[date] || 0) + expense.usdAmount;
    });
    
    // Sort dates chronologically
    const sortedDates = Object.keys(dailyTotals).sort((a, b) => {
        return new Date(a + ', 2025') - new Date(b + ', 2025');
    });
    
    const data = sortedDates.map(date => dailyTotals[date]);
    
    return {
        labels: sortedDates,
        datasets: [{
            label: 'Daily Expenses (USD)',
            data: data,
            backgroundColor: 'rgba(231, 76, 60, 0.8)',
            borderColor: '#e74c3c',
            borderWidth: 2,
            borderRadius: 4
        }]
    };
}

// Get currency chart data
function getCurrencyChartData() {
    const currencyTotals = {};
    
    filteredData.forEach(expense => {
        currencyTotals[expense.currency] = (currencyTotals[expense.currency] || 0) + expense.usdAmount;
    });
    
    const colors = ['#e74c3c', '#3498db', '#f39c12', '#9b59b6'];
    const labels = Object.keys(currencyTotals);
    const data = Object.values(currencyTotals);
    
    return {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors.slice(0, labels.length),
            borderWidth: 2,
            borderColor: '#fff'
        }]
    };
}

// Get chart options
function getChartOptions(title, type) {
    const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: title,
                font: {
                    size: 18,
                    weight: 'bold'
                },
                color: '#2c5530'
            },
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const value = context.parsed.y || context.parsed;
                        return `${context.label}: $${value.toFixed(2)}`;
                    }
                }
            }
        }
    };
    
    if (type === 'bar') {
        baseOptions.scales = {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '$' + value.toFixed(0);
                    }
                }
            },
            x: {
                ticks: {
                    maxRotation: 45
                }
            }
        };
    }
    
    return baseOptions;
}

// Update table summary
function updateTableSummary() {
    const displayedTotal = filteredData.reduce((sum, expense) => sum + expense.usdAmount, 0);
    const myShareTotal = filteredData.reduce((sum, expense) => {
        if (expense.mySplit > 0) {
            return sum + (expense.usdAmount / 3); // My 1/3 share of split expenses
        }
        return sum + expense.usdAmount; // Full amount for non-split expenses
    }, 0);
    
    document.getElementById('displayed-total').textContent = `$${displayedTotal.toFixed(2)}`;
    document.getElementById('my-share-total').textContent = `$${myShareTotal.toFixed(2)}`;
}

// Render expenses table
function renderExpensesTable() {
    const tbody = document.getElementById('expenses-tbody');
    tbody.innerHTML = '';
    
    // Sort filtered data by date (newest first)
    const sortedData = [...filteredData].sort((a, b) => b.parsedDate - a.parsedDate);
    
    sortedData.forEach(expense => {
        const row = document.createElement('tr');
        const isShared = expense.mySplit > 0;
        const sharedDisplay = isShared ? '<span class="split-badge">SPLIT</span>' : '';
        
        row.innerHTML = `
            <td>${expense.parsedDate.toLocaleDateString()}</td>
            <td><span class="category-badge category-${expense.subcategory.toLowerCase()}">${expense.subcategory}</span></td>
            <td>${expense.displayDescription}</td>
            <td class="amount-cell">${expense.amount.toLocaleString()} ${expense.currency}</td>
            <td>${expense.currency}</td>
            <td class="amount-cell">$${expense.usdAmount.toFixed(2)}</td>
            <td class="amount-cell">${sharedDisplay}</td>
        `;
        tbody.appendChild(row);
    });
    
    // Add category badge styles if not already added
    addCategoryBadgeStyles();
    updateTableSummary();
}

// Add category badge styles
function addCategoryBadgeStyles() {
    if (document.getElementById('category-badge-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'category-badge-styles';
    style.textContent = `
        .category-badge {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 500;
            color: white;
        }
        .category-food { background-color: #ff6b6b; }
        .category-taxi { background-color: #4ecdc4; }
        .category-hotel { background-color: #45b7d1; }
        .category-entertainment { background-color: #96ceb4; }
        .category-souvenirs { background-color: #feca57; }
        .category-travel { background-color: #ff9ff3; }
        .category-miscellaneous { background-color: #54a0ff; }
    `;
    document.head.appendChild(style);
}

// Export functionality (bonus feature)
function exportToCSV() {
    const headers = ['Date', 'Category', 'Description', 'Amount', 'Currency', 'USD Amount', 'My Split'];
    const csvContent = [
        headers.join(','),
        ...filteredData.map(expense => [
            expense.parsedDate.toLocaleDateString(),
            expense.subcategory,
            `"${expense.displayDescription}"`,
            expense.amount,
            expense.currency,
            expense.usdAmount.toFixed(2),
            (expense.mySplit / 1000).toFixed(2)
        ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bali-trip-expenses.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}


// Utility function to format currency
function formatCurrency(amount, currency) {
    if (currency === 'USD') {
        return `$${amount.toFixed(2)}`;
    } else if (currency === 'IDR') {
        return `${amount.toLocaleString()} IDR`;
    } else if (currency === 'VND') {
        return `${amount.toLocaleString()} VND`;
    }
    return `${amount} ${currency}`;
}

// Animation for chart transitions
function animateChart() {
    if (currentChart) {
        currentChart.update('active');
    }
}

// Responsive chart handling
window.addEventListener('resize', function() {
    if (currentChart) {
        setTimeout(() => {
            currentChart.resize();
        }, 100);
    }
});
        
