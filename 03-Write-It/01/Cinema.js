

const movies = [
    'HORS NORMES',
    'THE MUSTANG',
    'JOKER',
    'DOWNTON ABBEY',
    'PARASITE',
    'LA RAGAZZA NELAA NEBBIA',
    'ONCE UPON A TIME IN HOLLYWOOD',
    'AU NOM DE LA TERRE',
    'ITZHAK',
    'EVEREST:DE JONGE YETI',
    'MINISCULE 2:HET TROPISCH AVONTUUR',
    'DE LEEUWENKONING',

];




const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ul>`);
reversed = movies.reverse();
movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ul>`);

console.log(movies);