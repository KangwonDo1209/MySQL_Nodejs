var http = require("http");
var url = require("url");
var topic = require("./lib/topic");
var css = require("./lib/css");
var author = require("./lib/author");

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    // 메인 페이지
    if (pathname === "/") {
        // Home
        if (queryData.id === undefined) {
            topic.home(request, response);
        } else {
            // 게시글 조회 (Read)
            topic.page(request, response);
        }
    } else if (pathname === "/create") {
        // 게시글 생성 (Create)
        topic.create(request, response);
    } else if (pathname === "/create_process") {
        // 게시글 생성 후 리다이렉션
        topic.create_process(request, response);
    } else if (pathname === "/update") {
        // 게시글 수정 (Update)
        topic.update(request, response);
    } else if (pathname === "/update_process") {
        // 게시글 수정 후 리다이렉션
        topic.update_process(request, response);
    } else if (pathname === "/delete_process") {
        // 게시글 삭제 (Delete)
        topic.delete_process(request, response);
    } else if (pathname === "/author") {
        // 작가 페이지
        author.home(request, response);
    } else if (pathname === "/author/create_process") {
        // 작가 생성
        author.create_process(request, response);
    } else if (pathname === "/author/update") {
        // 작가 업데이트
        author.update(request, response);
    } else if (pathname === "/author/update_process") {
        // 작가 업데이트_제출
        author.update_process(request, response);
    } else if (pathname === "/author/delete_process") {
        // 작가 삭제
        author.delete_process(request, response);
    } else if (pathname === "/style.css") {
        css.load_style(request, response);
    } else {
        // 잘못된 경로
        response.writeHead(404);
        response.end("Not found");
    }
});
app.listen(3000);
