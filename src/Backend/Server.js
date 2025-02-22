//Imports
const express = require('express'); 
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

//Letting front end communicate with backend
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route for galaxies get requests
app.get('/api/galaxies', (req, res) => {
    const galaxies = [
        {
            Name: "Milky Way Galaxy",
            Type: "Galaxy",
            Description: "The galaxy containing the Sun and its Solar System, and therefore Earth.",
            Picture: "https://upload.wikimedia.org/wikipedia/commons/4/43/ESO-VLT-Laser-phot-33a-07.jpg"
          },
          {
            Name: "Andromeda Galaxy",
            Type: "Galaxy",
            Description: "Andromeda is the closest big galaxy to the Milky Way and is expected to collide with the Milky Way around 4.5 billion years from now. The two will eventually     merge into a single new galaxy called Milkdromeda.",
            Picture: "https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg"
          },
          {
            Name: "Bode's Galaxy",
            Type: "Galaxy",
            Description: "Also known as Messier 81. The largest galaxy in the M81 Group. It harbors a supermassive black                           hole 70 million times the mass of the Sun.",
            Picture: "https://upload.wikimedia.org/wikipedia/commons/5/59/Messier81.png"
          },
          {
            Name: "Cartwheel Galaxy",
            Type: "Galaxy",
            Description: "Also known as Messier 81. The largest galaxy in the M81 Group. It harbors a supermassive black hole 70 million times the mass of the Sun.",
            Picture: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Cartwheel_Galaxy_JWST_NIRCam%2BMIRI_Full_Res.png"
          },
          {
            Name: "Antennae Galaxies",
            Type: "Galaxy",
            Description: "The Antenna Galaxies are two colliding galaxies and got their name due to the resemblance of an insects antennae",
            Picture: "https://upload.wikimedia.org/wikipedia/commons/3/30/Antennae_Galaxies_reloaded.jpg"
          },
          {
            Name: "Condor Galaxy",
            Type: "Galaxy",
            Description: "The largest known spiral galaxy, it has a diameter of over 665,300 light-years (204.0 kiloparsecs).[3] It is tidally disturbed by the smaller lenticular galaxy IC 4970.",
            Picture: "https://upload.wikimedia.org/wikipedia/commons/6/65/NGC_6872_and_IC_4970_by_ESO_VLT.jpg"
          },
          {
            Name: "Cosmos Redshift 7",
            Type: "Galaxy",
            Description: "Galaxy Cosmos Redshift 7 is reported to be the brightest of distant galaxies and to contain some of the earliest first stars that produced the chemical elements needed for the later formation of planets and life as we know it.",
            Picture: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Eso1524aArtist%E2%80%99s_impression_of_CR7_the_brightest_galaxy_in_the_early_Universe.jpg"
          }
    ];
    res.status(201).json({ myGalaxy: galaxies });//returning JSON with status 201 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
