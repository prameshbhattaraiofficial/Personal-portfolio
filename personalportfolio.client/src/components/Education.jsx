/*export default function Education({ items }) {
    return (
        <section id="education">
            <div className="section-head">
                <span className="section-tag">04</span>
                <h2>Education</h2>
            </div>
            <div className="edu-grid">
                {items.map((item) => (
                    <div className="edu-card" key={item.school}>
                        <div className="edu-date">{item.period}</div>
                        <div className="edu-degree">{item.degree}</div>
                        <div className="edu-school">{item.school}</div>
                        <div className="edu-gpa">GPA {item.gpa}</div>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '10px 0 0',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '6px 14px',
                            }}
                        >
                            {item.coursework.map((course, index) => (
                                <li
                                    key={index}
                                    style={{
                                        fontSize: '0.85rem',
                                        color: '#94a3b8',
                                    }}
                                >
                                    <span style={{ color: '#f59e0b', marginRight: '6px' }}>?</span>
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}*/

export default function Education({ items }) {
    const StarIcon = () => (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#f59e0b"
            style={{ marginRight: '6px', flexShrink: 0 }}
        >
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2z" />
        </svg>
    );

    return (
        <section id="education">
            <div className="section-head">
                <span className="section-tag">04</span>
                <h2>Education</h2>
            </div>
            <div className="edu-grid">
                {items.map((item) => (
                    <div className="edu-card" key={item.school}>
                        <div className="edu-date">{item.period}</div>
                        <div className="edu-degree">{item.degree}</div>
                        <div className="edu-school">{item.school}</div>
                        <div className="edu-gpa">GPA {item.gpa}</div>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '10px 0 0',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '6px 14px',
                            }}
                        >
                            {item.coursework.map((course, index) => (
                                <li
                                    key={index}
                                    style={{
                                        fontSize: '0.85rem',
                                        color: '#94a3b8',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <StarIcon />
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}