import type { PageLoad } from './$types';
import { username } from '../stores/info_input';

export const load = (async () => {
    const lista_negra = [
        "gordas", "gorda", 
        "negra", "negras", 
        "judia", "judias", 
        "paraguaya", "paraguayas", 
        "boliviana", "bolivianas", 
        "putas", "puto",
        "negro", "trolo", 
        "putos", "negros", 
        "trolos", "boliviano", 
        "bolivianos", "paraguayo", 
        "paraguayos", "judio",
        "judios", "puta",
        "militares", "videla",
        "desaparecidos", "africanos",
        "africana", "africanas",
        "de%20mierda"
    ]

    const queryend = lista_negra.join("%22%20OR%20%22") + "%22&src=typed_query&f=top";
    
    function funa_normal() {
        window.location.href = `https://twitter.com/search?q=from%3A${username}%20%20%22${queryend}`
    }

    return {};
}) satisfies PageLoad;