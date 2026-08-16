export default function ArchitectureDiagram() {
  return (
    <div className="diagram-box">
      <div>
        <svg
          viewBox="0 0 420 420"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Clean Architecture layer diagram of the technical stack"
        >
          <g className="rotator">
            <circle className="ring" cx="210" cy="210" r="195" stroke="#262C3F" strokeDasharray="2 6" />
          </g>
          <circle className="ring" cx="210" cy="210" r="165" stroke="#232A3C" />
          <circle className="ring" cx="210" cy="210" r="120" stroke="#2A3348" />
          <circle className="ring" cx="210" cy="210" r="75" stroke="#333F5C" />
          <circle cx="210" cy="210" r="34" fill="#1B2032" stroke="#5B8DEF" strokeWidth="1.4" />

          <g className="rotator-rev">
            <text className="ring-label" x="210" y="30" textAnchor="middle" fill="#E8A33D">
              PRESENTATION
            </text>
          </g>

          <text className="ring-sub" x="210" y="52" textAnchor="middle" fill="#8B92A8">
            React · jQuery · Bootstrap
          </text>

          <text className="ring-label" x="210" y="82" textAnchor="middle" fill="#5B8DEF">
            INFRASTRUCTURE
          </text>
          <text className="ring-sub" x="210" y="97" textAnchor="middle" fill="#8B92A8">
            EF Core · ADO.Net · MSSQL
          </text>

          <text className="ring-label" x="210" y="128" textAnchor="middle" fill="#ECEEF4">
            APPLICATION
          </text>
          <text className="ring-sub" x="210" y="143" textAnchor="middle" fill="#8B92A8">
            ASP.NET Core · Web API
          </text>

          <text className="ring-label" x="210" y="207" textAnchor="middle" fill="#ECEEF4" fontWeight="600">
            DOMAIN
          </text>
          <text className="ring-sub" x="210" y="222" textAnchor="middle" fill="#8B92A8">
            C# · OOP
          </text>
        </svg>
        <div className="diagram-caption">the shape everything else here gets built inside</div>
      </div>
    </div>
  )
}
