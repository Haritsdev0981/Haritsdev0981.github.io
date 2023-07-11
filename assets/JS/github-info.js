var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/Haritsdev0981/repos', true);
request.onload = function() {
    var data = JSON.parse(this.response);

    var strhtml = ""
    $.each(data, function(i, str) {
        console.log(((str.description == null) ? "&nbsp;" : str.description));
        strhtml += "<div class='card mycard p-0 h-100 col-lg-3 col-md-5 col-sm-8'>";
        strhtml += "<div class='card-body  d-flex m-0 flex-column align-items-center text-center'>";
        strhtml += "<p class='card-title'><a class='text-decoration-none card-title title-repo' href='" + str.html_url + "' target='_blank'>" + str.name + "</a></p>";
        // strhtml += "<p class='card-subtitle'>" + ((str.language == null) ? "&nbsp;" : str.language) + "</p>";
        strhtml += "<p class='card-text col-12 text-truncate'>" + ((str.description == null) ? "&nbsp;" : str.description) + "</p>";
        strhtml += "<a class='btn btn-hire text-white rounded' href='"+ str.html_url +"'>See Project </a>";
        strhtml += "</div>";
        strhtml += "</div>";
    });

    $("#mybox").html(strhtml);
}

request.send();