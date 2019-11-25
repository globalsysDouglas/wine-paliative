    document.body.style.opacity = "0";
    function dynamicallyLoadScript(url) {
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    }

    dynamicallyLoadScript("https://www.googletagmanager.com/gtag/js?id=UA-5733415-1");

    var pathname = window.location.pathname;
    var fileName = pathname.substring(pathname.lastIndexOf('/')+1);
    var amp = "&amp;";
    var url = document.URL;

    setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-5733415-1', {'optimize_id': 'GTM-NS39JSJ'});

        if(url.includes(amp)){
            document.body.innerHTML = '<div><img src="https://img.wine.com.br/fenix/image/loading.svg "><h2>Aguarde...</h2></div><style>body{height:100vh;display:flex;align-items:center;justify-content:center;}</style>';
            gtag('send', 'event', 'Manuteção', fileName, document.referrer, {
                'event_callback': function() {
                    alert("Call");
                    window.location.replace(url.replace(new RegExp(amp, 'g'), "&"));
                }
            });
        }else{
            console.log("NOT Redirect");
        }
        document.body.style.opacity = "1";
    }, 1000);
