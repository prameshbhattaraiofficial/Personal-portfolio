namespace PortfolioApi.Models;

public class ExperienceItem
{
    public string Title { get; set; } = string.Empty;
    public string Organization { get; set; } = string.Empty;
    public string Period { get; set; } = string.Empty;
    public List<string> Highlights { get; set; } = new();
}
