
const async = require('async')
const faker = require('faker');
const mongoose = require('mongoose');
const RandomGenerator = require('random-points-generator');

const arrayRazasFull = ["Affenpinscher","Afghan Hound","Afghan Shepherd","Aidi","Airedale Terrier","Akbash","Akita","Alano Español","Alaskan husky","Alaskan Klee Kai","Alaskan Malamute","Alopekis","Alpine Dachsbracke","American Akita","American Bulldog","American Cocker Spaniel","American English Coonhound","American Eskimo Dog","American Foxhound","American Hairless Terrier","American Pit Bull Terrier","American Staffordshire Terrier","American Water Spaniel","Anatolian Shepherd Dog","Andalusian Hound","Anglo-Français de Petite Vénerie","Appenzeller Sennenhund","Ariege Pointer","Ariegeois","Armant","Armenian Gampr dog","Artois Hound","Australian Cattle Dog","Australian Kelpie","Australian Shepherd","Australian Silky Terrier","Australian Stumpy Tail Cattle Dog","Australian Terrier","Austrian Black and Tan Hound","Austrian Pinscher","Azawakh","Bakharwal Dog","Barbet","Basenji","Basque Ratter","Basque Shepherd Dog","Basset Artésien Normand","Basset Bleu de Gascogne","Basset Fauve de Bretagne","Basset Griffon Vendéen, Grand","Basset Griffon Vendéen, Petit","Basset Hound","Bavarian Mountain Hound","Beagle","Beagle-Harrier","Bearded Collie","Beauceron","Bedlington Terrier","Belgian Shepherd Dog (Groenendael)","Belgian Shepherd Dog (Laekenois)","Belgian Shepherd Dog (Malinois)","Belgian Shepherd Dog (Tervuren)","Bergamasco Shepherd","Berger Blanc Suisse","Berger Picard","Bernese Mountain Dog","Bichon Frisé","Billy","Black and Tan Coonhound","Black and Tan Virginia Foxhound","Black Norwegian Elkhound","Black Russian Terrier","Black Mouth Cur","Bleu de Gascogne, Grand","Bleu de Gascogne, Petit","Bloodhound","Blue Heeler","Blue Lacy","Blue Picardy Spaniel","Bluetick Coonhound","Boerboel","Bohemian Shepherd","Bolognese","Border Collie","Border Terrier","Borzoi","Bosnian Coarse-haired Hound","Boston Terrier","Bouvier des Ardennes","Bouvier des Flandres","Boxer","Boykin Spaniel","Bracco Italiano","Braque d'Auvergne","Braque du Bourbonnais","Braque Francais","Braque Saint-Germain","Brazilian Dogo","Brazilian Terrier","Briard","Briquet Griffon Vendéen","Brittany","Broholmer","Bruno Jura Hound","Bucovina Shepherd Dog","Bull and Terrier","Bull Terrier","Bull Terrier (Miniature)","Bulldog","Bullmastiff","Bully Kutta","Burgos Pointer","Cairn Terrier","Canaan Dog","Canadian Eskimo Dog","Cane Corso","Cantabrian Water Dog","Cão da Serra de Aires","Cão de Castro Laboreiro","Cão de Gado Transmontano","Cão Fila de São Miguel","Carolina Dog","Carpathian Shepherd Dog","Catahoula Leopard Dog","Catalan Sheepdog","Caucasian Shepherd Dog","Cavalier King Charles Spaniel","Central Asian Shepherd Dog","Cesky Fousek","Cesky Terrier","Chesapeake Bay Retriever","Chien Français Blanc et Noir","Chien Français Blanc et Orange","Chien Français Tricolore","Chihuahua","Chilean Fox Terrier","Chinese Chongqing Dog","Chinese Crested Dog","Chinese Imperial Dog","Chinook","Chippiparai","Chow Chow","Cierny Sery","Cirneco dell'Etna","Clumber Spaniel","Collie, Rough","Collie, Smooth","Combai","Coton de Tulear","Cretan Hound","Croatian Sheepdog","Curly-Coated Retriever","Cursinu","Czechoslovakian Wolfdog","Dachshund","Dalmatian","Dandie Dinmont Terrier","Danish-Swedish Farmdog","Deutsche Bracke","Doberman Pinscher","Dogo Argentino","Dogue de Bordeaux","Drentse Patrijshond","Drever","Dunker","Dutch Shepherd","Dutch Smoushond","East Siberian Laika","East European Shepherd","Elo","English Cocker Spaniel","English Foxhound","English Mastiff","English Setter","English Shepherd","English Springer Spaniel","English Toy Terrier (Black & Tan)","Entlebucher Mountain Dog","Estonian Hound","Estrela Mountain Dog","Eurasier","Eurohound","Field Spaniel","Fila Brasileiro","Finnish Hound","Finnish Lapphund","Finnish Spitz","Flat-Coated Retriever","Fox Terrier (Smooth)","Fox Terrier, Wire","French Brittany","French Bulldog","French Spaniel","Gaddi Kutta","Galgo Español","Galician Cattle Dog","Garafian Shepherd","Gascon Saintongeois","Georgian Shepherd Dog","German Longhaired Pointer","German Pinscher","German Roughhaired Pointer","German Shepherd Dog","German Shorthaired Pointer","German Spaniel","German Spitz","German Wirehaired Pointer","Giant Schnauzer","Glen of Imaal Terrier","Golden Retriever","Gordon Setter","Gran Mastín de Borínquen","Grand Anglo-Français Blanc et Noir","Grand Anglo-Français Blanc et Orange","Grand Anglo-Français Tricolore","Grand Griffon Vendéen","Great Dane","Great Pyrenees","Greater Swiss Mountain Dog","Greek Harehound","Greenland Dog","Greyhound","Griffon Bleu de Gascogne","Griffon Bruxellois","Griffon Fauve de Bretagne","Griffon Nivernais","Guatemalan Dogo","Hamiltonstövare","Hanover Hound","Harrier","Havanese","Himalayan Sheepdog","Hokkaido","Hortaya Borzaya","Hovawart","Huntaway","Hygenhund","Ibizan Hound","Icelandic Sheepdog","Indian pariah dog","Indian Spitz","Irish Red and White Setter","Irish Setter","Irish Terrier","Irish Water Spaniel","Irish Wolfhound","Istrian Coarse-haired Hound","Istrian Shorthaired Hound","Italian Greyhound","Jack Russell Terrier","Jagdterrier","Jämthund","Japanese Chin","Japanese Spitz","Japanese Terrier","Kaikadi (dog)","Kai Ken","Kangal Dog","Kanni","Karakachan Dog","Karelian Bear Dog","Karst Shepherd","Keeshond","Kerry Beagle","Kerry Blue Terrier","King Charles Spaniel","King Shepherd","Kintamani","Kishu Ken","Komondor","Kooikerhondje","Koolie","Korean Jindo","Kromfohrländer","Kumaon Mastiff","Kunming Wolfdog","Kuvasz","Kyi-Leo","Labrador Husky","Labrador Retriever","Lagotto Romagnolo","Lakeland Terrier","Lancashire Heeler","Landseer","Lapponian Herder","Leonberger","Lhasa Apso","Lithuanian Hound","Löwchen","Mackenzie River Husky","Magyar agár","Mahratta Greyhound","Majorca Ratter","Majorca Shepherd Dog","Maltese","Manchester Terrier","Maremma Sheepdog","McNab","Mexican Hairless Dog","Miniature Australian Shepherd","Miniature American Shepherd","Miniature Fox Terrier","Miniature Pinscher","Miniature Schnauzer","Miniature Shar Pei","Mioritic"," Molossus of Epirus","Montenegrin Mountain Hound","Moscow Watchdog","Mountain Cur","Mucuchies","Mudhol Hound","Mudi","Münsterländer, Large","Münsterländer, Small","Neapolitan Mastiff","Newfoundland","New Zealand Heading Dog","Norfolk Terrier","Norrbottenspets","Northern Inuit Dog","Norwegian Buhund","Norwegian Elkhound","Norwegian Lundehund","Norwich Terrier","Nova Scotia Duck-Tolling Retriever","Old Croatian Sighthound","Old Danish Pointer","Old English Sheepdog","Old English Terrier","Old German Shepherd Dog","Old Time Farm Shepherd","Olde English Bulldogge","Otterhound","Pachon Navarro","Pandikona Hunting Dog","Papillon","Parson Russell Terrier","Patterdale Terrier","Pekingese","Perro de Presa Canario","Perro de Presa Mallorquin","Peruvian Hairless Dog","Phalène","Pharaoh Hound","Phu Quoc Ridgeback","Picardy Spaniel","Plummer Terrier","Plott Hound","Podenco Canario","Pointer","Poitevin ","Polish Greyhound","Polish Hound","Polish Hunting Dog","Polish Lowland Sheepdog","Polish Tatra Sheepdog","Pomeranian","Pont-Audemer Spaniel","Poodle","Porcelaine","Portuguese Podengo","Portuguese Pointer","Portuguese Water Dog","Posavac Hound","Pražský Krysařík","Pudelpointer","Pug","Puli","Pumi","Pungsan Dog","Pyrenean Mastiff","Pyrenean Shepherd","{{Anchor","Rajapalayam","Rampur Greyhound","Ratonero Bodeguero Andaluz","Ratonero Murciano de Huerta","Ratonero Valenciano","Rat Terrier","Redbone Coonhound","Rhodesian Ridgeback","Rottweiler","Russian Spaniel","Russian Toy","Russo-European Laika","Russell Terrier","Saarloos wolfdog","Sabueso Español","Sabueso fino Colombiano","Saint-Usuge Spaniel","Sakhalin Husky","Saluki","Samoyed","Sapsali","Šarplaninac","Schapendoes","Schillerstövare","Schipperke","Standard Schnauzer","Schweizer Laufhund","Schweizerischer Niederlaufhund","Scotch Collie","Scottish Deerhound","Scottish Terrier","Sealyham Terrier","Segugio Italiano","Seppala Siberian Sleddog","Serbian Hound","Serbian Tricolour Hound","Shar Pei","Shetland Sheepdog","Shiba Inu","Shih Tzu","Shikoku","Shiloh Shepherd","Siberian Husky","Silken Windhound","Sinhala Hound","Skye Terrier","Sloughi","Slovak Cuvac","Slovakian Rough-haired Pointer","Slovenský Kopov","Smålandsstövare","Small Greek Domestic Dog","Soft-Coated Wheaten Terrier","South Russian Ovcharka","Spanish Mastiff","Spanish Water Dog","Spinone Italiano","Sporting Lucas Terrier","St. Bernard","Stabyhoun","Staffordshire Bull Terrier","Stephens Cur","Styrian Coarse-haired Hound","Sussex Spaniel","Swedish Lapphund","Swedish Vallhund","Taigan","Taiwan Dog","Tamaskan Dog","Teddy Roosevelt Terrier","Telomian","Tenterfield Terrier","Terceira Mastiff","Thai Bangkaew Dog","Thai Ridgeback","Tibetan Mastiff","Tibetan Spaniel","Tibetan Terrier","Tornjak","Tosa","Toy Fox Terrier","Toy Manchester Terrier","Transylvanian Hound","Treeing Cur","Treeing Tennessee Brindle","Treeing Walker Coonhound","Trigg Hound","Tyrolean Hound","Vanjari Hound","Villano de Las Encartaciones","Vizsla","Volpino Italiano","Weimaraner","Welsh Corgi, Cardigan","Welsh Corgi, Pembroke","Welsh Sheepdog","Welsh Springer Spaniel","Welsh Terrier","West Highland White Terrier","West Siberian Laika","Westphalian Dachsbracke","Wetterhoun","Whippet","White Shepherd","Wirehaired Pointing Griffon","Wirehaired Vizsla"]

const arrayRazas = ["Affenpinscher","Afghan Hound","Afghan Shepherd","Aidi","Airedale Terrier","Cão Fila de São Miguel","Carolina Dog","Carpathian Shepherd Dog","Catahoula Leopard Dog","Catalan Sheepdog","Caucasian Shepherd Dog","Cavalier King Charles Spaniel","Central Asian Shepherd Dog","Cesky Fousek","Cesky Terrier","Chesapeake Bay Retriever","Polish Hunting Dog","Polish Lowland Sheepdog","Polish Tatra Sheepdog","Pomeranian","Pont-Audemer Spaniel","Poodle","Porcelaine","Portuguese Podengo","Portuguese Pointer","Portuguese Water Dog","Welsh Terrier","West Highland White Terrier","West Siberian Laika","Westphalian Dachsbracke","Wetterhoun","Whippet","White Shepherd","Wirehaired Pointing Griffon","Wirehaired Vizsla"]

const db = mongoose.connection;


const ObjectId = mongoose.Schema.ObjectId

db.on('error', (err) => {
    console.log(err);
  });

db.once('open', () => {
console.log('<------------------>');
console.log('Conectado a mongodb');
});

/*const Dog = mongoose.model('Dog', {
    name: String,
    age: Number,
    breed: String,
    purebreed: Boolean,
    color: String,
    query: { age: String, max_kms: Number, reproductive: Boolean, breed: String },
    likes_from_others: [{
        dog_like_id: ObjectId,
        dog_name: String,
        owner_id: ObjectId,
        owner_name: String
    }]


})*/
const User = mongoose.model('User', {
     first_name: String,
     last_name: String,
     email: String,
     username: String,
     password: String,
     coordinates: { type: [Number], index: '2dsphere' },
     dogs: [{
        name: String,
        age: Number,
        breed: String,
        purebreed: Boolean,
        color: String,
        query: { age: String, max_kms: Number, reproductive: Boolean, breed: String },
        likes_from_others: [{
            dog_like_id: ObjectId,
            dog_name: String,
            owner_id: ObjectId,
            owner_name: String
        }],
        description: String,
        photos: [String]
    }]    
    });

const MAX_INSERTS = 2000
const DATABASE_NAME = 'test1'
var coll = new Array(MAX_INSERTS)
var iterator = 0
faker.locale = 'es'

/* 
   Una vez securizada la DB habrá que usar este 
   connection string:
   mongodb://username:password@localhost:27017/database
   sacado de: http://mongoosejs.com/docs/connections.html
*/
mongoose.connect('mongodb://localhost/'+ DATABASE_NAME,(err)=> {
  if (err) {
    console.log(err);
    return;
  }
    async.map(coll,function() {
        createUser(function(user) {
            var userMongoose = new User(user)
            userMongoose.save(function(err) {
                iterator++
                if(iterator == MAX_INSERTS) {
                    process.exit(1)
                }
            })
        })
    })
})

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomIntFromArrayLenght(array) {
    Math.floor(Math.random()*array.length)
}

function createUser(callback) {
    var randomName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var randomEmail = faker.internet.email(); 
    var randomPass = faker.internet.password(8,true)
    var username = faker.internet.userName()
    var points = RandomGenerator.random(1, { bbox: [36.890136,-6.334120,41.386673,2.520861]});
    
    var coordinates = points.features[0].geometry.coordinates
    var dogName = faker.hacker.adjective()
    var razaPerro = arrayRazas[randomIntFromArrayLenght(arrayRazas)]
    var pureBreed = randomIntFromArrayLenght(arrayRazas) % 2 == 0 ? true : false
    var description = faker.lorem.sentence(10,10)
    var arrayPhotos = [faker.image.animals(640,480),faker.image.animals(640,480)]
    var randomAge = randomIntFromInterval(1,18)
    var user = {
        first_name: randomName,
        last_name:lastName, 
        email: randomEmail, 
        username: username,
        password: randomPass,
        coordinates: coordinates,
        dogs: [{name: dogName,
                age: randomAge,
                breed: razaPerro,
                purebreed: pureBreed,
                query: {},
                likes_from_others: [],
                description: description,
                photos: arrayPhotos
            }]
       }
       callback(user)
}

