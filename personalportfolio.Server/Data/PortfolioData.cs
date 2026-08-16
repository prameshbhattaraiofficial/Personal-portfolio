using PortfolioApi.Models;

namespace PortfolioApi.Data;

/// <summary>
/// In-memory content for the portfolio. Swap this out for a database or CMS
/// later without changing the controller or the frontend contract.
/// </summary>
public static class PortfolioData
{
    public static Profile GetProfile() => new()
    {
        Name = "Pramesh Bhattarai",
        Role = "React & .NET Developer",
        Tagline = "I build enterprise web applications end to end — React on the front end, " +
                  ".NET (ASP.NET Core / Web API) on the back end — structured around Clean Architecture, " +
                  "REST APIs and SQL, so they stay easy to change long after they ship.",
        Summary = "Skilled software developer specializing in enterprise web applications, client-server " +
                  "systems, and Clean Architecture principles — working across object-oriented programming, " +
                  "REST APIs, and SQL database design, primarily on Microsoft technologies.",
        Location = "Kapan, Kathmandu",
        Email = "Prameshbhattaraiofficial@gmail.com",
        Phone = "+977 9863439135",
        LinkedIn = "https://www.linkedin.com/in/pramesh-bhattarai-2696071ab/",
        GitHub = "https://github.com/prameshbhattaraiofficial"
    };

    public static List<SkillGroup> GetSkills() => new()
    {
        new SkillGroup { Category = "Frontend", Items = new() { "React", "jQuery", "HTML5", "CSS3", "Bootstrap" } },
        new SkillGroup { Category = "Backend", Items = new() { "ASP.NET Core", "C#", "ASP.NET MVC", "Web API", "ADO.Net", "Entity Framework", "LINQ" } },
        new SkillGroup { Category = "Database", Items = new() { "MSSQL", "MySQL", "PostgreSQL" } },
        new SkillGroup { Category = "Tools", Items = new() { "Git", "GitHub", "Jira" } },
        new SkillGroup { Category = "Languages", Items = new() { "C#", "Java", "Python", "JavaScript" } },
    };

    public static List<ExperienceItem> GetExperience() => new()
    {
        new ExperienceItem
        {
            Title = "Dot Net Developer",
            Organization = "Smart Card Nepal Pvt. Ltd | MYPAY / Big Solutions Pvt. Ltd",
            Period = "Feb 2024 — Present",
            Highlights = new()
            {
                "Developed and implemented web services using .NET Web API",
                "Used ASP.NET validation controls for client-side validation",
                "Wrote SQL statements and stored procedures",
                "Collaborated with team members to meet project deadlines, resulting in timely delivery of projects",
                "Developing multiple new applications from scratch and supporting multiple existing applications"
            }
        },
        new ExperienceItem
        {
            Title = "Dotnet Developer",
            Organization = "Microcode Technologies Pvt. Ltd",
            Period = "Jun 2023 — Feb 2024",
            Highlights = new()
            {
                "Developed custom web applications, resulting in increased client satisfaction rates",
                "Maintained and updated existing web applications, improving functionality and user experience",
                "Collaborated with team members to meet project deadlines, resulting in timely delivery of projects"
            }
        },
        new ExperienceItem
        {
            Title = "Dotnet Intern",
            Organization = "Texas Imaginology",
            Period = "Mar 2021 — Apr 2023",
            Highlights = new()
            {
                "Collaborated with team members to meet project deadlines, resulting in timely delivery of projects",
                "Conducted unit testing, reducing bugs by 25%",
                "Designed REST web services in C# using a service layer",
                "Worked directly with clients"
            }
        }
    };

    public static List<EducationItem> GetEducation() => new()
    {
        new EducationItem
        {
            Degree = "Bachelor of Information Technology (BIT)",
            School = "Lincoln University College",
            Period = "2019 — 2023",
            Gpa = "3.74 / 4.00",
            Coursework = new()
            {
                "Database Management Systems", "Object Oriented Programming", "Web Application Development",
                "Software Architecture and Design", "Data Structures and Algorithms", "Software Engineering"
            }
        },
        new EducationItem
        {
            Degree = "NEB (+2), Management (Computer Science)",
            School = "Texas International College",
            Period = "2017 — 2019",
            Gpa = "2.81 / 4.00",
            Coursework = new()
            {
                "Programming Fundamentals", "Computer Fundamentals", "Operating Systems",
                "Web Technology", "Computer Networks", "Accounting", "Economics"
            }
        }
    };

    public static List<CertificateItem> GetCertificates() => new()
    {
        new CertificateItem { Name = "The Complete Java Masterclass", Issuer = "Udemy — Imran Afzal" },
        new CertificateItem { Name = "Project Management Principles and Practices", Issuer = "Coursera — University of California, Irvine" },
        new CertificateItem { Name = "Java Programming: Solving Problems with Software", Issuer = "Coursera — Duke University" },
        new CertificateItem { Name = "The Complete Full-Stack JavaScript Course", Issuer = "Udemy — Joseph Delgadillo" },
        new CertificateItem { Name = "Learn Python for Data Science and Machine Learning from A-Z", Issuer = "Udemy — Juan E. Galvan" },
    };
}
