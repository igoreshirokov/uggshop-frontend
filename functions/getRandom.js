export default function getRandom() {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return '_' + Math.random().toString(36).substr(2, 9);
    // return '_' + (Math.floor(Math.random() * (max - min + 1)) + min).toString(36).substr(2, 9); //Максимум и минимум включаются
}
