import { useState } from 'react';
import universitiesDB from '../../Data/db.json';
import './Admission.scss';

const calculateAdmissionChance = (university, scores) => {
  if (
    scores.ielts < university.minIELTS ||
    scores.toefl < university.minTOEFL ||
    scores.sat < university.minSAT
  ) {
    return 0;
  }

  let chance = university.acceptanceRate * 100;
  const ieltsBonus = Math.min(15, (scores.ielts - university.minIELTS) * 15);
  const toeflBonus = Math.min(15, (scores.toefl - university.minTOEFL) * 0.5);
  const satBonus = Math.min(15, (scores.sat - university.minSAT) * 0.03);

  chance += ieltsBonus + toeflBonus + satBonus;

  return Math.min(95, Math.max(0, chance)).toFixed(1);
};

const AdmissionCalculator = () => {
  const [scores, setScores] = useState({
    ielts: 6.5,
    toefl: 90,
    sat: 1300,
    gpa: 3.5,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [noMatches, setNoMatches] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScores((prevScores) => ({
      ...prevScores,
      [name]: parseFloat(value),
    }));
  };

  const countries = [...new Set(universitiesDB.universities.map((uni) => uni.country))].sort();

  const handleSubmit = (e) => {
    e.preventDefault();
    let filtered = universitiesDB.universities;

    if (searchTerm) {
      filtered = filtered.filter((uni) =>
        uni.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (countryFilter) {
      filtered = filtered.filter((uni) => uni.country === countryFilter);
    }

    const calculatedResults = filtered.map((uni) => ({
      ...uni,
      chance: calculateAdmissionChance(uni, scores),
    }));

    calculatedResults.sort((a, b) => b.chance - a.chance);

    setResults(calculatedResults);
    setShowResults(true);
    setNoMatches(calculatedResults.length === 0);
  };

  const getChanceColor = (chance) => {
    if (chance >= 75) return '#10b981';
    if (chance >= 50) return '#f59e0b';
    if (chance >= 25) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="admission-page">
      <div className="calculator-container">
        <div className="calculator-header">
          <h1>Acceptance chance calculator</h1>
          <p>Find out your chances at the world's leading universities</p>
        </div>

        <form onSubmit={handleSubmit} className="calculator-form">
          <div className="form-section">
            <h3>Your academic records</h3>

            <div className="input-group">
              <label>
                <span>IELTS: {scores.ielts}</span>
                <input
                  type="range"
                  name="ielts"
                  min="1"
                  max="9"
                  step="0.5"
                  value={scores.ielts}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                <span>TOEFL: {scores.toefl}</span>
                <input
                  type="range"
                  name="toefl"
                  min="0"
                  max="120"
                  value={scores.toefl}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="input-group">
              <label>
                <span>SAT: {scores.sat}</span>
                <input
                  type="range"
                  name="sat"
                  min="400"
                  max="1600"
                  value={scores.sat}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                <span>GPA: {scores.gpa}</span>
                <input
                  type="range"
                  name="gpa"
                  min="0"
                  max="4"
                  step="0.1"
                  value={scores.gpa}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Filter universities</h3>

            <div className="search-group">
              <input
                type="text"
                placeholder="Search university..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
              >
                <option value="">All countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="calculate-btn">
            Calculate chances
            <span className="icon">→</span>
          </button>
        </form>
      </div>

      {showResults && (
        <div className="results-container">
          <div className="results-header">
            <h2>Results</h2>
            <p>{results.length} Universities found</p>
          </div>

          {noMatches ? (
            <div className="no-results">No universities were found matching the selected criteria</div>
          ) : (
            <div className="university-cards">
              {results.map((uni) => (
                <div
                  key={uni.id}
                  className="university-card"
                  style={{ borderLeft: `5px solid ${getChanceColor(uni.chance)}` }}
                >
                  <div className="card-header">
                    <h3>{uni.name}</h3>
                    <div
                      className="chance-badge"
                      style={{ backgroundColor: getChanceColor(uni.chance) }}
                    >
                      {uni.chance}%
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="university-info">
                      <span className="country-flag">🌍</span>
                      <span>{uni.country}</span>
                    </div>

                    <div className="requirements">
                      <div className="requirement">
                        <span>Min IELTS:</span>
                        <span>{uni.minIELTS}</span>
                      </div>
                      <div className="requirement">
                        <span>Min TOEFL:</span>
                        <span>{uni.minTOEFL}</span>
                      </div>
                      <div className="requirement">
                        <span>Min SAT:</span>
                        <span>{uni.minSAT}</span>
                      </div>
                    </div>

                    <div className="acceptance-rate">
                      <span>Acceptance rate:</span>
                      <span>{(uni.acceptanceRate * 100).toFixed(1)}%</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <a
                      href={uni.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="website-link"
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdmissionCalculator;
