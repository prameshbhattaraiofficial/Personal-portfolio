namespace PortfolioApi.Models;

public class SkillGroup
{
    public string Category { get; set; } = string.Empty;
    public List<string> Items { get; set; } = new();
}
