namespace PortfolioApi.Models;

public class EducationItem
{
    public string Degree { get; set; } = string.Empty;
    public string School { get; set; } = string.Empty;
    public string Period { get; set; } = string.Empty;
    public string Gpa { get; set; } = string.Empty;
    public List<string> Coursework { get; set; } = new();
}
