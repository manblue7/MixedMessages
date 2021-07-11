let r1 = require('readline-sync');

let names = ['Glyn Hines',
    'Liberty Ashley', 'Rachel Dunne', 'Murray Tomlinson','Marvin Bender','Nojus Schneider','Shah Mcdermott','Kiah Hogg','Montana Moreno','Humayra Maxwell', 'Cathal House','Skye Marquez',
    'Kien Morris','Summer-Louise Caldwell','Reem Dean','Mark Aguilar','Fabian Snider','Brandi West', 'Marnie Burris', 'Maisy Beltran',  'Daniela Valencia', 'Adeel Robinson', 'Betsy Lawson',
     'Makenzie Mill',  'Ayyan Cottrell', 'Solomon Browning', 'Taine Guerrero',  'Eliott Mellor', 'Murphy Shaffer', 'Nana Nava', 'Lilli Wickens', 'Zayna Waller', 'Roza Mccall', "Tommy-Lee O'Ryan", 'Parker Alcock',
     'Maddox Edwards','Aronas Avery','Ada Jones','Ayra Carlson','Iain Gilbert','Hal Macgregor','Tessa Hunter','Dylon Haynes','Ayana Major','Elsa Mckee','Pharrell Cobb','Riaan Barclay','Willa Welch',
     'Harlow Cooley','Alyce Guthrie','Shaunie Watt','Jonny Adkins','Hallie Naylor','Dennis Silva','Olaf Justice','Ella-Mae Franklin','Ava-Mae Mahoney','Marcos Molina','Isobella Wilks','Joe Guzman','Yasin Berry','Jesus Mccullough',
    'Mallory Chaney','Siddharth Thomson','Fenton Noel','Lara Clifford','Lillie-Mai Jacobs','Nahla Mata', 'Yash Mills','Shamas Iles','Franky Peralta', 'Kelise Leblanc','Husna Parry', 'Alyssia Mcculloch',
    'Vinny Fletcher','Hashim Benjamin','Nick Cabrera', 'Nazia Simons',  'Joni Haworth', 'Lester Deleon',  'Lawrence Lindsay', 'Danyal Markham',
    'Ellie-Louise Munro',  'Tracy Huynh',  'Roy Guest',  'Bradleigh Amin','Catriona Cordova', 'Theia Reynolds', 'Kendall Foster', 'Darrell Chester', 'Dione Sharp', 'Neo Moss',
    'Kayleigh Searle', 'Christiana Arias', 'Elyse Benitez', 'Thea Rivas', 'Tammy Anderson', 'Danial Hodgson'];
    
let events = ['went to the supermarket', 'made a clay sculpture', 'invented portal technology', 'attended the Olympics', 'had a bad day', 'got married', 'had waffles for breakfast',
'smoked weed for the first time', 'read a book', 'attended a party', 'bought new shoes at Target', 'found out his wife was a walrus', 'attempted to make coffee', 'finished their book',
'played a concert at the Rose bowl', 'sent a letter to their grandma', 'went on a joy ride', 'began to feel ill', 'went to Jared\'s', 'enjoyed tofu', 'sang a pretty song', 'got aboard a plane',
'met up with an old friend', 'finished college', 'sniffed a flower', 'went on a brisk walk', 'finally got their promotion', 'cleaned out the garage', 'started a sowing class', 'lost their job',
'got really impatient', 'understood what life was about', 'cared for a kitten', 'was running late to work', 'had a fine \'ol day', 'capitalized on cheap labor', 'decided to register to vote',
'had a little too much to drink', 'hiked across the Himalayas', 'found change in their pocket', 'pushed a big red button', 'got into a bit of a pickle', 'had too much to eat', 'got to level 70 in wow', 'got hired for a new job', ''];

const genDates = () => {
    let arr = [];
    let months = ['Jan', 'Feb', 'March', 'Apr', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const firstDate = new Date(`${months[Math.floor(Math.random() * months.length)]} 1, 1986 12:00:00`);
    const secondDate = new Date(`${months[Math.floor(Math.random() * months.length)]} 1, 2020 00:00:00`);
    for(let i = 0; i < 100; i++){
        arr.push(new Date(firstDate.getTime() + Math.random() * (secondDate.getTime() - firstDate.getTime())));
    }
    return arr;
}


const genMessage = () => {
    let dates = genDates();
    let name = names[Math.floor(Math.random() * names.length)];
    let event;
    let event2;
    while(true) {
        event = events[Math.floor(Math.random() * events.length)];
        event2 = events[Math.floor(Math.random() * events.length)];
        if(event != event2) {
            break;
        }
    }
    
    return `> On ${dates[Math.floor(Math.random() * dates.length)].toDateString()} ${name} ${event} and ${event2}\n`;
}

const menu = () => {
    console.log('Welcome to Mixed Messages, press Enter to generate a random pseudo-event from the past. Type \'q\' and then Enter to quit');
    while(true) {
        let inp = r1.question('');
        if(inp != 'q') {
            console.log(genMessage());
        } else {break}
    }
}

menu();
