/* ============================================================
   CV CONTENT  (edit me)
   - CV_SECTIONS : the menu entries in ~/cv (must match the keys of CV below).
   - Each row: when / title / where / note. Leave where or note as '' to hide that line.
   ============================================================ */
window.CV_SECTIONS = ['positions', 'observations', 'talks', 'internships', 'skills'];

window.CV = {
  positions: [
    { when: '2026 – present', title: 'Postdoctoral fellow', where: 'INAF OATs, Trieste, Italy', note: 'Research fellowship (contratto di ricerca)' },
    { when: '2025 – 2026', title: 'Postdoctoral fellow', where: 'SISSA, Trieste, Italy', note: 'Research fellowship (borsa per attività di ricerca e perfezionamento) · Advisor: M. Viel' },
    { when: '2022 – 2025', title: 'PhD in Physics, cum laude', where: 'University of Trieste · Astronomical Observatory of Trieste, Italy', note: 'Thesis: The Lyman-α Forest as a Probe of Fundamental Cosmology: Detecting Dark Photon Dark Matter and Measuring the expansion of the Universe · Supervisor: S. Cristiani · Defence: 9 Feb 2026' },
    { when: '2020 – 2022', title: "Master's degree in Physics, Astrophysics and Cosmology", where: 'University of Trieste, Italy', note: 'Thesis: Probing the small scale structure of the IGM with lensed quasar spectra · Supervisor: S. Cristiani · Grade: 110/110 cum laude' },
    { when: '2017 – 2020', title: "Bachelor's degree in Physics", where: 'University of Trieste, Italy', note: 'Thesis: CUBES: simulation and analysis of ionizing escape fraction from high redshift star-forming objects · Supervisor: S. Cristiani · Grade: 109/110' }
  ],
  observations: [
    { when: 'Sept. 2026', title: 'NTT/EFOSC2 · visitor mode · 4 nights', where: 'Run 117.2AF5', note: '"Crossing the QSO Redshift Desert at z~5.5 with Machine Learning selection" (PI: Grazian)' },
    { when: 'Jan.–Mar. 2026', title: 'PI · VLT/ESPRESSO · service mode · 19.5 h', where: 'Run 116.28U4', note: '"Breaking the 1 m/s/yr barrier in the measurement of the cosmic redshift drift"' },
    { when: 'Apr.–May 2025', title: 'PI · VLT/ESPRESSO · service mode · 19.2 h', where: 'Run 115.28E05', note: '"ESPRESSO in the sky with diamonds: the small scale structure of the IGM with spectroscopy of lensed quasars"' },
    { when: 'Jun. 2024', title: 'NTT/EFOSC2 · visitor mode · 5.5 nights', where: 'Run 113.26R5', note: '"Machine Learning tools to find the Brightest high-z QSOs in the Southern Hemisphere" (PI: Guarneri)' },
    { when: '2023 – present', title: 'Co-I of 9 accepted observational proposals for ESO telescopes', where: '340 hours in total', note: '' },
    { when: '2025 – present', title: 'Referee for observational proposals', where: 'Telescopio Nazionale Galileo (TNG), Large Binocular Telescope (LBT), Rapid Eye Mount (REM)', note: '' },
    { when: '2025 – present', title: 'Referee for journal articles', where: 'JCAP, JSPC', note: '' }
  ],
  talks: [
    { when: 'Sept. 2026', title: 'Invited talk: The ESPRESSO Redshift Drift Experiment', where: 'ESO Colloquia, ESO Vitacura Headquarters, Santiago, Chile', note: '' },
    { when: 'Jun. 2026', title: 'Contributed talk: New robust constraints on Dark Photon Dark Matter from the intergalactic medium · Poster: Measuring the Cosmic Redshift Drift with the VLT: A Long-Term ESPRESSO Program into the ELT Era', where: '1st BiCoQ conference: "From gravity to particles", Università di Milano Bicocca, Milan, Italy', note: '' },
    { when: 'May 2026', title: 'Contributed talk: The ESPRESSO Redshift Drift Experiment', where: 'UniVersum VII, Naples, Italy', note: '' },
    { when: 'Jan 2026', title: 'Invited panellist: Extreme wavelength calibration & Laser Frequency Comb technology', where: 'VLT Beyond 2030, ESO, Munich, Germany', note: '' },
    { when: 'May 2025', title: 'Contributed talk: Probing the Small-Scale Structure of the IGM with Lensed Quasars', where: 'The galaxy-IGM connection in the first billion years, focus week, IFPU, Trieste, Italy', note: '' },
    { when: 'May 2025', title: 'Contributed talk: New robust constraints on Dark Photon Dark Matter from the intergalactic medium', where: '5th EuCAPT Annual Symposium, CERN (remote)', note: '' },
    { when: 'Apr 2025', title: 'Contributed talk: The ESPRESSO Redshift Drift Experiment – High-fidelity spectra of the Lyman-α forest of QSO J0529-4351', where: 'IberiCos 2025, Coimbra, Portugal', note: '' },
    { when: 'Jan 2024', title: 'Contributed talk: Fundamental Physics in the Lyman-α Forest with CUBES', where: 'CUBES Science Team Meeting 2024, Osservatorio Astronomico di Capodimonte, Napoli, Italy', note: '' },
    { when: 'Jul 2023', title: 'Contributed talk: Probing the Small-Scale Structure of the IGM with Lensed Quasars', where: 'StEm, Sexten, Italy', note: '' },
    { when: 'Apr 2023', title: 'Contributed talk: Probing the Small-Scale Structure of the IGM with Lensed Quasars', where: 'IberiCos 2023, Ponte de Lima, Portugal', note: '' },
    { when: 'Feb 2023', title: 'Contributed talk: Probing the Small-Scale Structure of the IGM with Lensed Quasars', where: 'ESPRESSO Science Team Meeting 2023, Lanzarote, Spain (remote)', note: '' }
  ],
  internships: [
    { when: 'Sep 2024', title: 'IV Azores School on Observational Cosmology: Fundamental cosmology from the ELT and space facilities', where: 'Instituto de Astrofísica e Ciências do Espaço, Angra do Heroísmo, Azores, Portugal', note: '' },
    { when: 'Nov – Dec 2022', title: 'XXXIII Canary Islands Winter School of Astrophysics: Overlaps at the boundaries of Astrophysics, Cosmology and Particle Physics', where: 'Instituto de Astrofísica de Canarias (IAC), Tenerife, Spain', note: '' },
    { when: '2021', title: "Beta tester and junior developer for Astrocook's spectrum analysis pipelines and routines", where: 'Astronomical Observatory of Trieste', note: '' },
    { when: '2019', title: "Characterization and calibration of the observatory's photometric camera at the SVAS telescope; drafted the instrument's user manual", where: 'Astronomical Observatory of Trieste', note: '' }
  ],
  skills: [
    { when: 'Languages', title: 'Italian (native), English (fluent), Portuguese (basic)', where: '', note: '' },
    { when: 'Coding', title: 'Python, IDL, Fortran, C, Arduino, HTML, LaTeX', where: '', note: '' },
    { when: 'Software', title: 'Astrocook, QFitsView, Marz, EsoReflex, DS9, GAIA, IRAF, VPFIT', where: '', note: '' }
  ]
};
