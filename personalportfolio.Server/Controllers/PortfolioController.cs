using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Data;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class PortfolioController : ControllerBase
{
    /// <summary>Name, role, tagline, and contact details.</summary>
    [HttpGet("profile")]
    public ActionResult<Profile> GetProfile()
    {
        return Ok(PortfolioData.GetProfile());
    }

    /// <summary>Tech stack grouped by category (Frontend, Backend, Database, Tools, Languages).</summary>
    [HttpGet("skills")]
    public ActionResult<List<SkillGroup>> GetSkills()
    {
        return Ok(PortfolioData.GetSkills());
    }

    /// <summary>Work history, most recent first.</summary>
    [HttpGet("experience")]
    public ActionResult<List<ExperienceItem>> GetExperience()
    {
        return Ok(PortfolioData.GetExperience());
    }

    /// <summary>Degrees and coursework.</summary>
    [HttpGet("education")]
    public ActionResult<List<EducationItem>> GetEducation()
    {
        return Ok(PortfolioData.GetEducation());
    }

    /// <summary>Online course certificates.</summary>
    [HttpGet("certificates")]
    public ActionResult<List<CertificateItem>> GetCertificates()
    {
        return Ok(PortfolioData.GetCertificates());
    }

    /// <summary>Convenience endpoint returning everything in a single response.</summary>
    [HttpGet("all")]
    public ActionResult<object> GetAll()
    {
        return Ok(new
        {
            Profile = PortfolioData.GetProfile(),
            Skills = PortfolioData.GetSkills(),
            Experience = PortfolioData.GetExperience(),
            Education = PortfolioData.GetEducation(),
            Certificates = PortfolioData.GetCertificates()
        });
    }
}
