//ARREGLOS
//const skills: String[] = ["Bash", "Counter", 'Healing'];

interface Character{
    name: String;
    hp: number;
    skills: String[];
    hometown?: String;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider);

export{}