function abbrevName(name){

    // code away
    let acronym = name.match(/\b(\w)/g).join('.');
    return acronym.toUpperCase();
}