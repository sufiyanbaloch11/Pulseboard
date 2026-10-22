import "./styles/dashboard.css";

const stats = [
  { label: "Total Revenue", value: "$48,294", change: "+12.8%", icon: "↗" },
  { label: "Total Users", value: "8,549", change: "+8.2%", icon: "♙" },
  { label: "Total Orders", value: "1,429", change: "+5.4%", icon: "▣" },
  { label: "Conversion Rate", value: "3.62%", change: "+2.1%", icon: "%" },
];

const transactions = [
  { name: "Olivia Rhye", email: "olivia@example.com", product: "Pro Plan", date: "Oct 22, 2026", amount: "$249.00", status: "Completed" },
  { name: "Phoenix Baker", email: "phoenix@example.com", product: "Basic Plan", date: "Oct 21, 2026", amount: "$99.00", status: "Pending" },
  { name: "Lana Steiner", email: "lana@example.com", product: "Pro Plan", date: "Oct 20, 2026", amount: "$249.00", status: "Completed" },
  { name: "Demi Wilkinson", email: "demi@example.com", product: "Enterprise", date: "Oct 19, 2026", amount: "$499.00", status: "Completed" },
  { name: "Candice Wu", email: "candice@example.com", product: "Basic Plan", date: "Oct 18, 2026", amount: "$99.00", status: "Cancelled" },
];

const chartValues = [38, 52, 43, 65, 55, 72, 60, 82, 68, 88, 74, 96];

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">P</div>
          <span>PulseBoard</span>
        </div>

        <div className="workspace">
          <span className="workspace-avatar">S</span>
          <div>
            <strong>Startup Studio</strong>
            <small>Free workspace</small>
          </div>
          <span className="workspace-arrow">⌄</span>
        </div>

        <p className="nav-heading">MENU</p>
        <nav className="navigation">
          <a className="nav-link active" href="#overview"><span>▦</span> Overview</a>
          <a className="nav-link" href="#analytics"><span>▥</span> Analytics</a>
          <a className="nav-link" href="#customers"><span>♙</span> Customers</a>
          <a className="nav-link" href="#transactions"><span>⇄</span> Transactions</a>
          <a className="nav-link" href="#reports"><span>▤</span> Reports</a>
        </nav>

        <p className="nav-heading tools-heading">WORKSPACE</p>
        <nav className="navigation">
          <a className="nav-link" href="#settings"><span>⚙</span> Settings</a>
          <a className="nav-link" href="#help"><span>?</span> Help & Support</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-symbol">✦</div>
            <strong>Upgrade your plan</strong>
            <p>Get more insights and grow your business.</p>
            <button>Upgrade now <span>→</span></button>
          </div>
          <div className="profile">
            <div className="profile-avatar">SK</div>
            <div>
              <strong>Sufiyan Khan</strong>
              <small>Administrator</small>
            </div>
            <span className="profile-menu">···</span>
          </div>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumb">Pages <span>/</span> <strong>Overview</strong></div>
          <div className="top-actions">
            <div className="search-box">
              <span>⌕</span>
              <input placeholder="Search anything..." />
              <kbd>⌘ K</kbd>
            </div>
            <button className="icon-button" aria-label="Notifications">♧<i /></button>
            <div className="top-avatar">SK</div>
          </div>
        </header>

        <section className="page-heading">
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <h1>Dashboard</h1>
            <p className="subtitle">Welcome back! Here's what's happening with your business today.</p>
          </div>
          <button className="date-button">▦ &nbsp; Oct 1 – Oct 23, 2026 &nbsp;⌄</button>
        </section>

        <section className="stats-grid">
          {stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <div className="stat-top">
                <span>{item.label}</span>
                <span className="stat-icon">{item.icon}</span>
              </div>
              <h2>{item.value}</h2>
              <div className="stat-bottom">
                <span className="positive">{item.change} ↑</span>
                <span>vs. last month</span>
              </div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel revenue-panel" id="analytics">
            <div className="panel-header">
              <div>
                <h3>Revenue Overview</h3>
                <p>Track your revenue performance over time</p>
              </div>
              <button className="select-button">Last 12 months ⌄</button>
            </div>

            <div className="revenue-total">
              <strong>$48,294.00</strong>
              <span className="positive">+12.8%</span>
            </div>

            <div className="chart">
              <div className="chart-labels">
                <span>$10k</span>
                <span>$7.5k</span>
                <span>$5k</span>
                <span>$2.5k</span>
                <span>$0</span>
              </div>
              <div className="chart-area">
                <div className="chart-grid">
                  <i /><i /><i /><i /><i />
                </div>
                <svg viewBox="0 0 600 210" preserveAspectRatio="none" role="img" aria-label="Revenue trending upward">
                  <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8175f5" stopOpacity=".28" />
                      <stop offset="100%" stopColor="#8175f5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M 0 ${210 - chartValues[0] * 1.9} ${chartValues.map((v, i) => `L ${(i / (chartValues.length - 1)) * 600} ${210 - v * 1.9}`).join(" ")} L 600 210 L 0 210 Z`}
                    fill="url(#areaFill)"
                  />
                  <polyline
                    points={chartValues.map((v, i) => `${(i / (chartValues.length - 1)) * 600},${210 - v * 1.9}`).join(" ")}
                    fill="none"
                    stroke="#8175f5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="chart-months">
                  <span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span>
                  <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
                </div>
              </div>
            </div>
          </article>

          <article className="panel source-panel">
            <div className="panel-header">
              <div>
                <h3>Traffic Sources</h3>
                <p>Where your visitors come from</p>
              </div>
              <button className="more-button">···</button>
            </div>
            <div className="donut-wrap">
              <div className="donut"><div><strong>8,549</strong><span>Visitors</span></div></div>
            </div>
            <div className="source-list">
              <div><span><i className="source-dot purple" /> Direct</span><strong>42%</strong></div>
              <div><span><i className="source-dot blue" /> Social Media</span><strong>28%</strong></div>
              <div><span><i className="source-dot cyan" /> Organic Search</span><strong>18%</strong></div>
              <div><span><i className="source-dot orange" /> Referral</span><strong>12%</strong></div>
            </div>
          </article>
        </section>

        <section className="panel transactions-panel" id="transactions">
          <div className="panel-header transactions-heading">
            <div>
              <h3>Recent Transactions</h3>
              <p>You have 1,429 transactions this month</p>
            </div>
            <button className="select-button">View all transactions →</button>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr><th>CUSTOMER</th><th>PRODUCT</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th></tr>
              </thead>
              <tbody>
                {transactions.map((item) => (
                  <tr key={item.email}>
                    <td><div className="customer"><div className="customer-avatar">{item.name.split(" ").map(n => n[0]).join("")}</div><div><strong>{item.name}</strong><small>{item.email}</small></div></div></td>
                    <td>{item.product}</td>
                    <td>{item.date}</td>
                    <td className="amount">{item.amount}</td>
                    <td><span className={`status ${item.status.toLowerCase()}`}>{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 PulseBoard. All rights reserved.</span>
          <span>Made with care <b>♥</b></span>
        </footer>
      </main>
    </div>
  );
}

export default App;