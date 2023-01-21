<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checking</title>
</head>

<body>
    <script>
        let clinetId = "ydx8e4kuwdvcon0g5vynzckd0v0wkr";
        let clinetSecret = "q5giv1pb7ibryf6x3gdwtiauhkc2ux";

        function getTwitchAuthorization() {
            let url =
                `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

            return fetch(url, {
                    method: "POST",
                })
                .then((res) => res.json())
                .then((data) => {
                    return data;
                });
        }

        async function getStreams() {
            const endpoint = "https://api.twitch.tv/helix/streams?user_login=helix__tv";
            // const endpoint = "https://api.twitch.tv/helix/streams?user_login=hjune";

            let authorizationObject = await getTwitchAuthorization();
            let {
                access_token,
                expires_in,
                token_type
            } = authorizationObject;

            //token_type first letter must be uppercase    
            token_type =
                token_type.substring(0, 1).toUpperCase() +
                token_type.substring(1, token_type.length);

            let authorization = `${token_type} ${access_token}`;

            let headers = {
                authorization,
                "Client-Id": clinetId,
            };

            fetch(endpoint, {
                    headers,
                })
                .then((res) => res.json())
                .then((data) => renderStreams(data));
        }

        function renderStreams(data) {
            $arrayResponse = `${JSON.stringify(data)}`;
            console.log('arrayResponse');
            console.log($arrayResponse);

            const dddata = JSON.parse($arrayResponse);
            console.log('dddata');
            console.log(dddata);
            const value = dddata.data[0];
            console.log('value');
            console.log(value);
            if (dddata.length === 0) {
                console.log("Array is empty!")
            }

            if (value == null) {
                // document.body.innerHTML = 'NOT LIVE';
                window.location.replace("notlive.php");

            } else {
                // document.body.innerHTML = 'LIVE';
                window.location.replace("islive.php");
            };
        }

        getStreams();
    </script>

</body>

</html>