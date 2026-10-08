/* ============================================================
   RESEARCH PROJECTS  (edit me)
   One block per project, shown in this order in ~/research.
   - id         : the directory name in the menu and the URL (research.html#id). No spaces.
   - paragraphs : each string becomes one paragraph.
   - image      : path to a plot, e.g. 'assets/img/cubes_etc.png'. Leave '' to show the placeholder box.
   - plot       : text inside the placeholder box (used only when image is '').
   - extra      : optional "label · link" items shown under the figure.
   ============================================================ */
window.RESEARCH = [
  {
    id: 'Power_Spectrum',
    n: '01',
    title: 'Lyman-α Power Spectrum',
    meta: '2025 – present · EQUALS collaboration · VLT/ESPRESSO',
    paragraphs: [
      "The one-dimensional Lyman-α flux power spectrum (P1D) measures how the absorption by neutral hydrogen fluctuates along the line of sight to a distant quasar. Since the forest traces the matter distribution in the intergalactic medium, its shape on small scales is sensitive to the temperature of the gas, to the free-streaming of warm dark matter, and to how matter is distributed below a megaparsec.",
      "Within the EQUALS collaboration I am measuring the P1D from 25 quasars at z ≈ 3–4.5, observed with VLT/ESPRESSO at high resolution and high signal-to-noise. The resolution is what makes this sample interesting: it reaches the small scales where the mass of the dark matter particle has the largest effect on the power.",
      "Most of the work so far has gone into the measurement pipeline. Before the power spectrum can be compared with theory, the noise has to be modelled, the masks deconvolved, the instrumental resolution corrected and the metal lines removed. I estimate the statistical and systematic errors by bootstrapping the data and by running the same pipeline on mock spectra from hydrodynamical simulations.",
      "The results are not public yet. The aim is to put limits on warm dark matter that are at least as tight as the current best ones from the Lyman-α forest, using the resolution and signal-to-noise of the EQUALS spectra."
    ],
    image: 'assets/img/SpectraPlot.png',
    plot: '[ your plot: e.g. small-scale flux power spectrum ]',
    caption: 'The EQUALS sample',
    extra: [{ label: 'collaboration overview', text: 'Berg et al., The Messenger 195 (2025)', href: 'https://doi.org/10.18727/0722-6691/5395' }]
  },
  {
    id: 'Redshift_Drift',
    n: '02',
    title: 'The ESPRESSO Redshift Drift Experiment',
    meta: '2022 – present · ESPRESSO Redshift Drift Experiment · QSO J0529-4351',
    paragraphs: [
      "As the Universe expands, the redshifts of distant objects slowly change over time, at a rate set by the expansion history. Measuring this drift in quasar absorption lines (the Sandage test) would be a direct, model-independent test of cosmic acceleration, and a new way to tell dark energy models apart. The signal is tiny and needs a stability and precision beyond any current spectrograph, which is why it is one of the main science cases for ANDES at the ELT.",
      "As a first step, I analysed VLT/ESPRESSO spectra of J0529-4351, the brightest known quasar, taken about two years apart. Over such a short baseline the expected signal is far below the noise, so the point is not to detect it but to understand the measurement: find and quantify the main systematics, see how the Lyman-α forest reacts to instrumental and atmospheric effects, and test the pipeline against what future measurements will require.",
      "Comparing the two epochs gives a limit on the velocity drift of the Lyman-α absorbers along this sightline, which is a direct observational bound on cosmic acceleration at intermediate redshift. It also tests how well the forest works as a natural frequency comb for this kind of measurement, and how much the peculiar motions of the absorbing gas limit the precision we can reach.",
      "I am now adding a third year of data, which improves the statistics considerably. We use the results to estimate the baseline and total observing time ANDES will need for a significant detection, and to find the systematics that will have to be kept under control at that level."
    ],
    image: 'assets/img/Drift.jpeg',
    plot: '',
    caption: 'left - Measured velocity drift of the Lyman forest of J0529 over two years. right - expected measurement confidence level as a function of baseline with different observational strategies.',
    extra: [
      { label: 'paper I', text: 'Trost et al., A&A 699 · Jul 2025', href: 'publications.html#first-author' },
      { label: 'paper III', text: 'Trost et al., arXiv:2603.02318 · Mar 2026', href: 'publications.html#first-author' }
    ]
  },
  {
    id: 'Dark_Photons',
    n: '03',
    title: 'Dark Photon Dark Matter',
    meta: '2023 – 2024 · hydrodynamical simulations · Lyman-α forest',
    paragraphs: [
      "The intergalactic medium is a low-density, highly ionised plasma, which makes it a clean place to look for new physics. In dark photon dark matter models, a new U(1) gauge boson mixes kinetically with the ordinary photon. In the IGM, dark photons can convert resonantly into ordinary photons and heat the gas above what standard models predict, and this extra heating would show up in the Lyman-α forest.",
      "I used an ultra-high signal-to-noise VLT/UVES spectrum of HE0940-1050, one of the brightest known quasars, to measure the thermal state of the forest at z ~ 2.7. The quasar is bright, the sightline has little contamination and the spectrum is of excellent quality, so it is well suited for this measurement.",
      "To constrain dark photons, I compared statistics of the observed forest with mock spectra from high-resolution hydrodynamical simulations of the IGM, in which dark photon heating was added for a range of masses and kinetic mixing parameters. The data break the degeneracy between the two parameters and show which part of the parameter space is consistent with the thermal history of the IGM.",
      "These are the tightest Lyman-α forest bounds at this redshift. They complement laboratory and other astrophysical constraints, in a region of parameter space that is hard to reach with other probes."
    ],
    image: 'assets/img/DarkPhotons.jpeg',
    plot: '',
    caption: 'top - simulated Lyman-α forest spectra with different dark photon models. bottom - temperature-density distribution of hydrogen particles in the IGM, showing the effect of dark photon heating on the thermal state of the gas. right - transformed flux PDF of the simulated spectra, compared to HE0940-1050.',
    extra: [
      { label: 'short presentation', text: '[ link ]', href: 'https://indico.cern.ch/event/1515773/contributions/6467825/attachments/3055029/5401163/EuCAPT_5min_TROST_take2.mp4' },
      { label: 'related paper', text: 'Trost et al., Phys. Rev. D 111 · Apr 2025', href: 'publications.html#first-author' }
    ]
  },
  {
    id: 'Lensed_QSOs',
    n: '04',
    title: 'Lensed QSOs and the Small-Scale IGM',
    meta: '2021 – 2023 · VLT/ESPRESSO · UM673',
    paragraphs: [
      "Gravitationally lensed quasars can be used to study the small-scale structure of the intergalactic medium (IGM). The light of the different images takes slightly different paths through the cosmic web, which gives closely spaced sightlines through the same structures. Comparing the absorption along them shows how coherent the gas is and how it moves, on scales that are hard to observe in other ways.",
      "I applied this to high-resolution VLT/ESPRESSO spectra of the lensed quasar UM673. By comparing the Lyman-α forest and the metal absorption systems in the two sightlines, I studied the structure and motions of the gas down to scales of a few hundred parsecs.",
      "The Lyman-α forest turns out to be very coherent: the absorption in the two sightlines is strongly correlated, with no significant velocity shift between them. This limits fluctuations in the baryon density on sub-kpc scales to a few percent. Metal absorbers vary much more, with velocity shifts that grow with the separation between the sightlines. To order of magnitude, this is consistent with gas sitting in dark matter halos of about 2×10^10 solar masses.",
      "Lensed quasars are therefore a useful tool for studying the small-scale structure and dynamics of the cosmic web. The results also matter for redshift drift measurements: Lyman-α absorbers are very stable, but the peculiar motions of metal absorbers could be a significant source of astrophysical noise."
    ],
    image: 'assets/img/Lenses.jpeg',
    plot: '',
    caption: 'left — Lyman-α and metal absorbers along the two sightlines of UM673. right — velocity shifts of metal absorbers as a function of their separation, compared to the expected velocity dispersion of dark-matter halos.',
    extra: [{ label: 'related paper', text: 'Cristiani et al., MNRAS · Apr 2023', href: 'publications.html#all' }]
  },
  {
    id: 'CUBES',
    n: '05',
    title: 'CUBES',
    meta: '2020 · phase A · exposure time calculator',
    paragraphs: [
      "The near-ultraviolet, roughly 300 to 400 nm, is mostly out of reach for current VLT instruments at the resolution and efficiency needed for absorption-line work. At high redshift many rest-frame UV transitions move into the optical, but several diagnostics of the IGM, the circumgalactic medium and reionisation still need UV coverage at a signal-to-noise that current spectrographs can't provide. CUBES is a new VLT spectrograph designed for this wavelength range.",
      "During the Phase A study I joined the instrument team and worked on the Exposure Time Calculator (ETC). The ETC is what astronomers use to estimate the signal-to-noise, plan observations and judge what the instrument can do for different targets and modes.",
      "I worked mainly on the reionisation science case, using the ETC to assess how well CUBES can measure the escape fraction of ionising photons from high-redshift star-forming galaxies. This followed from my bachelor thesis, where I simulated how UV photons escape from distant star-forming galaxies and contribute to reionising the hydrogen in the early Universe.",
      "The ETC is public, and the instrument is going through its development phases. CUBES will bring forth high-resolution UV spectroscopy from the ground on an 8-m class telescope!"
    ],
    image: '',
    plot: '',
    caption: '',
    extra: [
      { label: 'CUBES ETC', text: 'cubes-etc', href: 'http://140.105.76.151:8000/cubes_etc' },
      { label: 'related paper', text: 'Genoni et al., Exp. Astron. · Mar 2022', href: 'publications.html#all' }
    ]
  },
];
