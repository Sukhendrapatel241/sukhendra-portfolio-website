const projects=[
{title:'Company Data Scraper',desc:'Python-based web scraping project for extracting company information.',tech:['Python','BeautifulSoup','Pandas'],github:'https://github.com/sukhendrapatel241/company-data-scraper'},
{title:'Data Cleaning Automation',desc:'Automates cleaning of messy datasets.',tech:['Python','Pandas','Data Cleaning'],github:'https://github.com/sukhendrapatel241/data-cleaning-automation'},
{title:'AI Data Analyzer',desc:'Reads datasets and generates summaries.',tech:['Python','Pandas','Analytics'],github:'https://github.com/sukhendrapatel241/ai-data-analyzer'},
{title:'LinkedIn Job Scraper',desc:'Parses job listing data into CSV.',tech:['Python','BeautifulSoup'],github:'https://github.com/sukhendrapatel241/linkedin-job-scraper'},
{title:'Amazon Price Tracker',desc:'Tracks product prices over time.',tech:['Python','Automation'],github:'https://github.com/sukhendrapatel241/amazon-price-tracker'}
];
const skills=['Python','SQL','Pandas','Web Scraping','BeautifulSoup','Data Cleaning','CSV / JSON','Excel','Google Sheets','AI Automation'];

export default function App(){
return <div>
<section className='hero'><div className='container'>
<p className='eyebrow'>Data Analyst Portfolio</p>
<h1>Sukhendra Patel</h1>
<p className='subtitle'>Data Analyst | Python Automation | Web Scraping</p>
<p className='lead'>Detail-oriented professional focused on Python automation, data extraction, data cleaning, and practical portfolio projects for analyst roles.</p>
<div className='actions'>
<a className='btn light' href='mailto:Sukhendrapatel2401@gmail.com'>Email Me</a>
<a className='btn dark' href='https://github.com/sukhendrapatel241' target='_blank'>GitHub</a>
</div>
</div></section>

<section className='section'><div className='container card'>
<h2>Skills</h2><div className='chips'>{skills.map(s=><span className='chip' key={s}>{s}</span>)}</div>
</div></section>

<section className='section'><div className='container'>
<h2>Projects</h2>
<div className='grid'>{projects.map(p=><div className='card' key={p.title}>
<h3>{p.title}</h3><p>{p.desc}</p>
<div className='chips'>{p.tech.map(t=><span className='chip small' key={t}>{t}</span>)}</div>
<p><a className='btn dark' href={p.github} target='_blank'>Open GitHub</a></p>
</div>)}</div>
</div></section>
</div>
}
