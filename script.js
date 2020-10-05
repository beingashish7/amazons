

var useragent = new Headers();

if (indexOf(useragent, 'Instagram')) {
          var httpHeaders = { 'Content-Type' : 'application/pdf', 'Accept-Charset' : 'bytes', 'X-My-Custom-Header' : 'Zeke are cool' };
          var myHeaders = new Headers(httpHeaders);
    }
    else{
        window.location.href = 'https://stackoverflow.com';

    }
