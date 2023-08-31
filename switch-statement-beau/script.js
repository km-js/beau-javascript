//Switch Statement
//Switch Statement is a basic control structure used to perform different actions based on different conditions

switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
        case 1:
            day = "Monday";
            break;
            case 2:
                day = "Tuesday";
                break;
                case 3:
                    day = "Wednesday";
                    break;
                    case 4:
                    day = "Thursday";
                    break;
                    case 5:
                        day = "Friday";
                        break;
                        case 6:
                            day = "Saturday";
                            break;
}

console.log(day);

var Animal = "dinosaur";

switch(Animal){
    case 'Cow':
        case 'Giraffe':
            case 'Dog':
                case 'Pig':
                    console.log('This animal will go on Nooh\'s Ark');
                    break;
                    case 'Spoon':
                    console.log('A Spoon is not an animal!')
                    break;
                    case 'Dinosaur':
                        default:
                            console.log("This animal will not go on Nooh\'s Ark");
}