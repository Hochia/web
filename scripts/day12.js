function congradulate() {
    var shana = document.getElementById("bella").value;
    document.getElementById("demo").innerHTML = shana.slice(18, shana.length) + " 女兒節快樂";
}
function typing_right_backspace() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana.slice(0, shana.length - 1);
}
function typing_whitespace() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + " ";
}
function typing_key_a() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "a";
}
function typing_key_b() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "b";
}
function typing_key_c() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "c";
}
function typing_key_d() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "d";
}
function typing_key_e() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "e";
}
function typing_key_f() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "f";
}
function typing_key_g() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "g";
}
function typing_key_h() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "h";
}
function typing_key_i() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "i";
}
function typing_key_j() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "j";
}
function typing_key_k() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "k";
}
function typing_key_l() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "L";
}
function typing_key_m() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "m";
}
function typing_key_n() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "n";
}
function typing_key_o() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "o";
}
function typing_key_p() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "p";
}
function typing_key_q() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "q";
}
function typing_key_r() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "r";
}
function typing_key_s() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "S";
}
function typing_key_t() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "t";
}
function typing_key_u() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "u";
}
function typing_key_v() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "v";
}
function typing_key_w() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "w";
}
function typing_key_x() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "x";
}
function typing_key_y() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "y";
}
function typing_key_z() {
    var shana = document.getElementById("bella").value;
    document.getElementById("bella").value = shana + "z";
}
var whitespace = document.getElementsByClassName("whitespace");
var right_backspace = document.getElementsByClassName("right_backspace");
var right_enter = document.getElementsByClassName("right_enter");
right_backspace[0].addEventListener("click", typing_right_backspace);
whitespace[0].addEventListener("click", typing_whitespace);
right_enter[0].addEventListener("click", congradulate);
var key_a = document.getElementsByClassName("key_a");
var key_b = document.getElementsByClassName("key_b");
var key_c = document.getElementsByClassName("key_c");
var key_d = document.getElementsByClassName("key_d");
var key_e = document.getElementsByClassName("key_e");
var key_f = document.getElementsByClassName("key_f");
var key_g = document.getElementsByClassName("key_g");
var key_h = document.getElementsByClassName("key_h");
var key_i = document.getElementsByClassName("key_i");
var key_j = document.getElementsByClassName("key_j");
var key_k = document.getElementsByClassName("key_k");
var key_l = document.getElementsByClassName("key_l");
var key_m = document.getElementsByClassName("key_m");
var key_n = document.getElementsByClassName("key_n");
var key_o = document.getElementsByClassName("key_o");
var key_p = document.getElementsByClassName("key_p");
var key_q = document.getElementsByClassName("key_q");
var key_r = document.getElementsByClassName("key_r");
var key_s = document.getElementsByClassName("key_s");
var key_t = document.getElementsByClassName("key_t");
var key_u = document.getElementsByClassName("key_u");
var key_v = document.getElementsByClassName("key_v");
var key_w = document.getElementsByClassName("key_w");
var key_x = document.getElementsByClassName("key_x");
var key_y = document.getElementsByClassName("key_y");
var key_z = document.getElementsByClassName("key_z");
key_a[0].addEventListener("click", typing_key_a);
key_b[0].addEventListener("click", typing_key_b);
key_c[0].addEventListener("click", typing_key_c);
key_d[0].addEventListener("click", typing_key_d);
key_e[0].addEventListener("click", typing_key_e);
key_f[0].addEventListener("click", typing_key_f);
key_g[0].addEventListener("click", typing_key_g);
key_h[0].addEventListener("click", typing_key_h);
key_i[0].addEventListener("click", typing_key_i);
key_j[0].addEventListener("click", typing_key_j);
key_k[0].addEventListener("click", typing_key_k);
key_l[0].addEventListener("click", typing_key_l);
key_m[0].addEventListener("click", typing_key_m);
key_n[0].addEventListener("click", typing_key_n);
key_o[0].addEventListener("click", typing_key_o);
key_p[0].addEventListener("click", typing_key_p);
key_q[0].addEventListener("click", typing_key_q);
key_r[0].addEventListener("click", typing_key_r);
key_s[0].addEventListener("click", typing_key_s);
key_t[0].addEventListener("click", typing_key_t);
key_u[0].addEventListener("click", typing_key_u);
key_v[0].addEventListener("click", typing_key_v);
key_w[0].addEventListener("click", typing_key_w);
key_x[0].addEventListener("click", typing_key_x);
key_y[0].addEventListener("click", typing_key_y);
key_z[0].addEventListener("click", typing_key_z);