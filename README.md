# SightMe Web Application

SightMe is a web application where multiple people can play a game in which the host hides somewhere in the city, and the participants have to find him using only the rough distance to him. The distance is indicated using a blinking circle which will blink faster the closer you get to the target. It is only available in the german language.

## How it works

### Hosting a game

The host creates a new game and will generate a link based on his nickname and position. The link does contain all neccessary information about the game as a Base64-Encoded JSON object:

    {
        "name": "Host name",
        "expiresAt": "<ISO-8601 Date>",
        "lat": 0.00,
        "lng": 0.00
    }
    
The link can be shared with all participants via third-party software.    

### Joining a game

When receiving a link from a game host, the user has to acknowledge to join the game "hosted by: <Host name>". Then, the active game will be set to that one, and the user will get an indication of how far away from the target he is. He can either leave the game himself or will be forced to leave 24 hours after the host created the game.

## Limitations

Technically, a participant can extract the exakt location of the host from link. The group has to rely on trust that nobody does this. The app will not be altered to take into account, since any other realisation would require a server and would increase the complexity by an order of magintude.

Since the `expiredAt` game is also sent in the join-link, it can be altered and games older than 24-hours can be accessed. The 24-hour-limit may not be seen as a security feature but rather as a convenience-feature.