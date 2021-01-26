$(document).ready(function () {
    $("#btnSearch").click(function () {
        
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();

        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/",
            cache: false,
            dataType: "jsonp",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=19c0fc0b",

            success: function (response) {
//                alert(JSON.stringify(response));

                var movies = JSON.parse(localStorage.getItem("movies"));

                if (movies === null) {
                    movies = [];
                }
                
                var movieReview = {
                    title: response.Title,
                    plot: response.Plot
                };

                movies.push(movieReview);
                localStorage.setItem("movies", JSON.stringify(movies));

                var message = ""
                
                message += "<b>Title: </b>" + response.Title + "</br>"
                message += "<b>Released: </b>" + response.Released + "</br>"
                message += "<b>Runtime: </b>" + response.Runtime + "</br>"
                message += "<b>Genre: </b>" + response.Genre + "</br>"
                message += "<b>Actors: </b>" + response.Actors + "</br>"
                message += "<b>Plot: </b>" + response.Plot + "</br>";


                $("#contents").html(message);
                var image = "<img src= " + response.Poster + "alt='poster'>";
                $("#poster").html(image);
            },
            
            error: function (obj, textStatus, errorThrown) {
                alert("Error " + textStatus + ": " + errorThrown);
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });

    });
});


