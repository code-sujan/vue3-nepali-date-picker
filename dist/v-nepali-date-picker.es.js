import { defineComponent as fe, ref as ye, computed as me, watch as he, onMounted as pe, openBlock as ve, createElementBlock as ge, createElementVNode as le, unref as be, normalizeClass as De, renderSlot as Ae, withModifiers as Be, createCommentVNode as Me, pushScopeId as Ce, popScopeId as Ye } from "vue";
const ae = function() {
  function S() {
    function e() {
      return D;
    }
    function r() {
      return w;
    }
    function n(u) {
      var Y = 0;
      return u.forEach(function(T) {
        Y += T;
      }), Y;
    }
    function a(u, Y) {
      var T = Date.UTC(u.year, u.month - 1, u.day), L = Date.UTC(Y.year, Y.month - 1, Y.day);
      return Math.abs((L - T) / 864e5);
    }
    function p(u, Y) {
      var T = 0, L = 0;
      for (L = u.year; L <= Y.year; L += 1)
        T += n(t[L]);
      for (L = 0; L < u.month; L += 1)
        T -= t[u.year][L];
      for (T += t[u.year][11], L = Y.month - 1; L < 12; L += 1)
        T -= t[Y.year][L];
      return T -= u.day + 1, T += Y.day - 1;
    }
    function E(u, Y) {
      var T = new Date(U(u, "MM/DD/YYYY"));
      return T.setDate(T.getDate() + Y), {
        year: T.getFullYear(),
        month: T.getMonth() + 1,
        day: T.getDate()
      };
    }
    function x(u, Y) {
      for (u.day += Y; u.day > t[u.year][u.month - 1]; )
        u.day -= t[u.year][u.month - 1], u.month += 1, u.month > 12 && (u.month = 1, u.year += 1);
      return {
        year: u.year,
        month: u.month,
        day: u.day
      };
    }
    function G(u) {
      var Y = p(y, u);
      return E(g, Y);
    }
    function f(u) {
      var Y = a(g, u);
      return x(y, Y);
    }
    function B(u, Y) {
      return t[u][Y - 1];
    }
    var t = [], y = {
      year: 2e3,
      month: 9,
      day: 17
    }, g = {
      year: 1944,
      month: 1,
      day: 1
    };
    t[1970] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1971] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], t[1972] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[1973] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[1974] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1975] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[1976] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[1977] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31], t[1978] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1979] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[1980] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[1981] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], t[1982] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1983] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[1984] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[1985] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], t[1986] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1987] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[1988] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[1989] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[1990] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1991] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], t[1992] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[1993] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[1994] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1995] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], t[1996] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[1997] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1998] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[1999] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2e3] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2001] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2002] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2003] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2004] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2005] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2006] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2007] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2008] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], t[2009] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2010] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2011] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2012] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], t[2013] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2014] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2015] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2016] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], t[2017] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2018] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2019] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2020] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[2021] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2022] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], t[2023] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2024] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[2025] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2026] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2027] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2028] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2029] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], t[2030] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2031] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2032] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2033] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2034] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2035] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], t[2036] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2037] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2038] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2039] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], t[2040] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2041] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2042] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2043] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], t[2044] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2045] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2046] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2047] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[2048] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2049] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], t[2050] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2051] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[2052] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2053] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], t[2054] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2055] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2056] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], t[2057] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2058] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2059] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2060] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2061] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2062] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31], t[2063] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2064] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2065] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2066] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], t[2067] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2068] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2069] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2070] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], t[2071] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2072] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2073] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], t[2074] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[2075] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2076] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], t[2077] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], t[2078] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], t[2079] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], t[2080] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], t[2081] = [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2082] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2083] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], t[2084] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], t[2085] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30], t[2086] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2087] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], t[2088] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30], t[2089] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2090] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2091] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], t[2092] = [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2093] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2094] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], t[2095] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30], t[2096] = [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], t[2097] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], t[2098] = [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31], t[2099] = [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30];
    var D = {
      year: 1970,
      month: 1,
      day: 1
    }, w = {
      year: 2099,
      month: 12,
      day: 30
    };
    return {
      minDate: e,
      maxDate: r,
      countAdDays: a,
      countBsDays: p,
      addBsDays: x,
      addAdDays: E,
      bs2ad: G,
      ad2bs: f,
      getDaysInMonth: B
    };
  }
  function P(e) {
    function r(G) {
      var f = {}, B = [], t = [];
      G.forEach(function(u, Y) {
        var T = parseInt(u), L = {
          index: Y,
          value: T,
          year: !1,
          month: !1,
          day: !1
        };
        T > 0 && T > 999 ? L.year = !0 : T > 0 && T > 12 ? L.day = !0 : T > 0 && T <= 12 && (L.month = !0, L.day = !0), t.push(L);
      });
      var y = t.filter(function(u) {
        return u.year == 1;
      })[0];
      if (y) {
        f.year = y.value, B[y.index] = "YYYY";
        var g = t.filter(function(u) {
          return u.day == 1;
        }), D = t.filter(function(u) {
          return u.month == 1;
        });
        D.length == 1 ? (f.month = D[0].value, B[D[0].index] = "MM", g.length == 1 ? (f.day = g[0].value, B[g[0].index] = "DD") : (g = g.find(function(u) {
          return !u.month;
        }), f.day = g.value, B[g.index] = "DD")) : D.length == 2 && g.length == 0 ? (f.month = D[0].value, f.day = D[1].value, B[D[0].index] = "MM", B[D[1].index] = "DD") : D.length == 2 && g.length == 2 && (f.month = g[0].value, f.day = g[1].value, B[g[0].index] = "MM", B[g[1].index] = "DD");
      }
      if (f && f.year == NaN || f.year == null || f.month == NaN || f.month == null || f.day == NaN || f.day == null)
        f = null, B = null;
      else {
        var w = M(f.year, f.month);
        f.day > w && (f = null, B = null);
      }
      return {
        parsedDate: f,
        parsedFormat: B
      };
    }
    var n = e.indexOf("/") > -1, a = e.indexOf("-") > -1, p = null;
    if (n) {
      var E = e.split("/");
      E.length == 3 && (p = r(E), p.parsedFormat = p.parsedFormat.join("/"));
    } else if (a) {
      var x = e.split("-");
      x.length == 3 && (p = r(x), p.parsedFormat = p.parsedFormat.join("-"));
    }
    return p;
  }
  function C(e, r) {
    var n = [], a = {
      year: null,
      month: null,
      day: null
    };
    switch (r) {
      case "MM/DD/YYYY":
        n = e.split("/"), n.length == 3 && (a = {
          year: Number(n[2]),
          month: Number(n[0]),
          day: Number(n[1])
        });
        break;
      case "MM-DD-YYYY":
        n = e.split("-"), n.length == 3 && (a = {
          year: Number(n[2]),
          month: Number(n[0]),
          day: Number(n[1])
        });
        break;
      case "YYYY-MM-DD":
        n = e.split("-"), n.length == 3 && (a = {
          year: Number(n[0]),
          month: Number(n[1]),
          day: Number(n[2])
        });
        break;
      case "YYYY/MM/DD":
        n = e.split("/"), n.length == 3 && (a = {
          year: Number(n[0]),
          month: Number(n[1]),
          day: Number(n[2])
        });
        break;
      case "DD-MM-YYYY":
        n = e.split("-"), n.length == 3 && (a = {
          year: Number(n[2]),
          month: Number(n[1]),
          day: Number(n[0])
        });
        break;
      case "DD/MM/YYYY":
        n = e.split("/"), n.length == 3 && (a = {
          year: Number(n[2]),
          month: Number(n[1]),
          day: Number(n[0])
        });
    }
    return (a && a.year == NaN || a.year == null || a.month == NaN || a.month == null || a.day == NaN || a.day == null) && (a = null), a;
  }
  function U(e, r) {
    function n(p) {
      return p = Number(p), p < 10 ? "0" + p : p;
    }
    var a = "";
    switch (r = r && c.indexOf(r) > -1 ? r : "YYYY-MM-DD") {
      case "MM/DD/YYYY":
        a = n(e.month) + "/" + n(e.day) + "/" + e.year;
        break;
      case "MM-DD-YYYY":
        a = n(e.month) + "-" + n(e.day) + "-" + e.year;
        break;
      case "YYYY-MM-DD":
        a = e.year + "-" + n(e.month) + "-" + n(e.day);
        break;
      case "YYYY/MM/DD":
        a = e.year + "/" + n(e.month) + "/" + n(e.day);
        break;
      case "DD-MM-YYYY":
        a = n(e.day) + "-" + n(e.month) + "-" + e.year;
        break;
      case "DD/MM/YYYY":
        a = n(e.day) + "/" + n(e.month) + "/" + e.year;
    }
    return a;
  }
  function j(e) {
    return new S().ad2bs(e);
  }
  function $(e) {
    return new S().bs2ad(e);
  }
  function k(e) {
    var r = new S(), n = r.minDate(), a = r.maxDate();
    if (e.year < n.year || e.year > a.year || e.month < n.month || e.month > a.month || e.day < n.day || e.day > a.day)
      return !1;
    var p = M(e.year, e.month);
    return e.month > 0 && e.month <= 12 && e.day > 0 && e.day <= p;
  }
  function H() {
    var e = new Date();
    e.setHours(e.getHours() + 5), e.setMinutes(e.getMinutes() + 45);
    var r = (e.toDateString(), e.getUTCDate()), n = e.getUTCMonth() + 1;
    return {
      year: e.getUTCFullYear(),
      month: n,
      day: r
    };
  }
  function z() {
    var e = H();
    return Number(e.year);
  }
  function q() {
    var e = H();
    return Number(e.month);
  }
  function K() {
    var e = H();
    return Number(e.day);
  }
  function I() {
    return j(H());
  }
  function R() {
    var e = I();
    return Number(e.year);
  }
  function Q() {
    var e = I();
    return Number(e.month);
  }
  function te() {
    var e = I();
    return Number(e.day);
  }
  function ne() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  function oe(e) {
    return e = Number(e), isNaN(e) || e < 0 || e > 11 ? null : ne()[e];
  }
  function re() {
    return ["Baisakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashoj", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"];
  }
  function ue(e) {
    return e = Number(e), isNaN(e) || e < 0 || e > 11 ? null : re()[e];
  }
  function O() {
    return ["\u092C\u0948\u0936\u093E\u0916", "\u091C\u0947\u0920", "\u0905\u0937\u093E\u0922", "\u0936\u094D\u0930\u093E\u0935\u0923", "\u092D\u093E\u0926\u094D\u0930", "\u0906\u0936\u094D\u0935\u093F\u0928", "\u0915\u093E\u0930\u094D\u0924\u093F\u0915", "\u092E\u0919\u094D\u0938\u093F\u0930", "\u092A\u094C\u0937", "\u092E\u093E\u0918", "\u092B\u093E\u0932\u094D\u0917\u0941\u0928", "\u091A\u0948\u0924\u094D\u0930"];
  }
  function de(e) {
    return e = Number(e), isNaN(e) || e < 0 || e > 11 ? null : O()[e];
  }
  function X() {
    return ["\u0906\u0907\u0924\u0935\u093E\u0930", "\u0938\u094B\u092E\u0935\u093E\u0930", "\u092E\u0919\u094D\u0917\u0932\u0935\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u092C\u093F\u0939\u093F\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930", "\u0936\u0928\u093F\u0935\u093E\u0930"];
  }
  function ie(e) {
    return e = Number(e), isNaN(e) || e < 0 || e > 6 ? null : X()[Number(e)];
  }
  function se() {
    return ["\u0906", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u092C\u093F", "\u0936\u0941", "\u0936"];
  }
  function W() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  function Z() {
    return ["S", "M", "T", "W", "T", "F", "S"];
  }
  function J(e) {
    return e = Number(e), isNaN(e) || e < 0 || e > 6 ? null : W()[Number(e)];
  }
  function ee(e, r) {
    var n = [], a = "";
    return r ? (n = O(), a = v(e.day) + " " + n[e.month - 1] + " " + v(e.year)) : (n = re(), a = e.day + " " + n[e.month - 1] + " " + e.year), a;
  }
  function ce(e) {
    return e.day + " " + ae.GetAdMonth(e.month - 1) + " " + e.year;
  }
  function o(e) {
    var r = ae.BS2AD(e);
    return r = new Date(r.year, r.month - 1, r.day), J(r.getDay());
  }
  function i(e) {
    var r = ae.BS2AD(e);
    return r = new Date(r.year, r.month - 1, r.day), ie(r.getDay());
  }
  function d(e) {
    return e = new Date(e.year, e.month - 1, e.day), J(e.getDay());
  }
  function s(e, r) {
    var n = new S(), a = n.bs2ad(e);
    return a = new Date(a.year, a.month - 1, a.day), a.setDate(a.getDate() + r), a = {
      year: a.getFullYear(),
      month: a.getMonth() + 1,
      day: a.getDate()
    }, n.ad2bs(a);
  }
  function h(e, r) {
    return new S().countAdDays(e, r);
  }
  function b(e, r) {
    if (!k(e) || !k(r))
      return !1;
    var n = new S();
    return e = n.bs2ad(e), r = n.bs2ad(r), n.countAdDays(e, r);
  }
  function l(e, r) {
    return new Date(e, r, 0).getDate();
  }
  function M(e, r) {
    var n = new S(), a = n.minDate(), p = n.maxDate();
    return (e < a.year || e > p.year) && (r < a.month || r > a.month) ? 0 : n.getDaysInMonth(e, r);
  }
  function v(e) {
    e = e.toString();
    var r = "", n = 0;
    for (n = 0; n < e.length; n += 1)
      r += function(a) {
        switch (a) {
          case "0":
            return "\u0966";
          case "1":
            return "\u0967";
          case "2":
            return "\u0968";
          case "3":
            return "\u0969";
          case "4":
            return "\u096A";
          case "5":
            return "\u096B";
          case "6":
            return "\u096C";
          case "7":
            return "\u096D";
          case "8":
            return "\u096E";
          case "9":
            return "\u096F";
          default:
            return a;
        }
      }(e[n]);
    return r;
  }
  function F(e) {
    e = e.toString();
    for (var r = "", n = 0; n < e.length; )
      r += function(a) {
        switch (a) {
          case "\u0966":
            return 0;
          case "\u0967":
            return 1;
          case "\u0968":
            return 2;
          case "\u0969":
            return 3;
          case "\u096A":
            return 4;
          case "\u096B":
            return 5;
          case "\u096C":
            return 6;
          case "\u096D":
            return 7;
          case "\u096E":
            return 8;
          case "\u096F":
            return 9;
          default:
            return a;
        }
      }(e[n]), n++;
    return r;
  }
  function N(e) {
    return e < 10 ? "0" + Number(e) : e;
  }
  function A(e, r) {
    function n(w) {
      var u = {
        0: "",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety"
      };
      w = Number(w);
      var Y = w.toString();
      return w < 20 ? u[w] : u[10 * Y[0]] + " " + u[Y[1]];
    }
    if (e = e || 0, isNaN(e) || Math.floor(e).toString().length > 13)
      return null;
    var a = "", p = 0, E = e.toString();
    if (E.indexOf(".") > -1) {
      var x = E.split(".");
      p = Number(x[1]);
    }
    var G = Math.floor(e % 100), f = null;
    e.toString().length > 2 && (f = e.toString().substring(e.toString().length - 3, e.toString().length - 2));
    var B = Math.floor(e % 1e5);
    B = B.toString(), B = B.substring(0, B.length - 3);
    var t = Math.floor(e % 1e7);
    t = t.toString(), t = t.substring(0, t.length - 5);
    var y = Math.floor(e % 1e9);
    y = y.toString(), y = y.substring(0, y.length - 7);
    var g = Math.floor(e % 1e11);
    g = g.toString(), g = g.substring(0, g.length - 9);
    var D = Math.floor(e % 1e13);
    for (D = D.toString(), D = D.substring(0, D.length - 11), D > 0 && (a += n(D) + " Kharab"), g > 0 && (a += " " + n(g) + " Arab"), y > 0 && (a += " " + n(y) + " Crore"), t > 0 && (a += " " + n(t) + " Lakh"), B > 0 && (a += " " + n(B) + " Thousand"), f > 0 && (a += " " + n(f) + " Hundred"), G > 0 && (a += " " + n(G)), a.trim() != "" && r && (a += " Rupees"), p > 0 && r && (a += " and " + n(p) + " Paisa"); a.indexOf("  ") > -1; )
      a = a.replace("  ", " ");
    return a.trim();
  }
  function _(e, r) {
    if (e = e || 0, isNaN(e) || Math.floor(e).toString().length > 13)
      return null;
    var n = ["\u0938\u0941\u0928\u094D\u092F", "\u090F\u0915", "\u0926\u0941\u0908", "\u0924\u0940\u0928", "\u091A\u093E\u0930", "\u092A\u093E\u0901\u091A", "\u091B", "\u0938\u093E\u0924", "\u0906\u0920", "\u0928\u094C", "\u0926\u0938", "\u090F\u0918\u093E\u0930", "\u092C\u093E\u0939\u094D\u0930", "\u0924\u0947\u0939\u094D\u0930", "\u091A\u094C\u0927", "\u092A\u0928\u094D\u0927\u094D\u0930", "\u0938\u094B\u0939\u094D\u0930", "\u0938\u0924\u094D\u0930", "\u0905\u0920\u093E\u0939\u094D\u0930", "\u0909\u0928\u094D\u0928\u093E\u0907\u0938", "\u092C\u0940\u0938", "\u090F\u0915\u093E\u0907\u0938", "\u092C\u093E\u0907\u0938", "\u0924\u0947\u0907\u0938", "\u091A\u094C\u092C\u0940\u0938", "\u092A\u091A\u0940\u0938", "\u091B\u092C\u094D\u092C\u0940\u0938", "\u0938\u0924\u094D\u0924\u093E\u0907\u0938", "\u0905\u0920\u094D\u0920\u093E\u0907\u0938", "\u0909\u0928\u0928\u094D\u0924\u0940\u0938", "\u0924\u0940\u0938", "\u090F\u0915\u0924\u0940\u0938", "\u092C\u0924\u0940\u0938", "\u0924\u0947\u0924\u0940\u0938", "\u091A\u094C\u0924\u0940\u0938", "\u092A\u0948\u0924\u0940\u0938", "\u091B\u0924\u0940\u0938", "\u0938\u0930\u0924\u0940\u0938", "\u0905\u0930\u0924\u0940\u0938", "\u0909\u0928\u0928\u091A\u093E\u0932\u0940\u0938", "\u091A\u093E\u0932\u0940\u0938", "\u090F\u0915\u091A\u093E\u0932\u0940\u0938", "\u092C\u092F\u093E\u0932\u093F\u0938", "\u0924\u0940\u0930\u091A\u093E\u0932\u0940\u0938", "\u091A\u094C\u0935\u093E\u0932\u093F\u0938", "\u092A\u0948\u0902\u0924\u093E\u0932\u093F\u0938", "\u091B\u092F\u093E\u0932\u093F\u0938", "\u0938\u0930\u091A\u093E\u0932\u0940\u0938", "\u0905\u0930\u091A\u093E\u0932\u0940\u0938", "\u0909\u0928\u0928\u091A\u093E\u0938", "\u092A\u091A\u093E\u0938", "\u090F\u0915\u093E\u0909\u0928\u094D\u0928", "\u092C\u093E\u0909\u0928\u094D\u0928", "\u0924\u094D\u0930\u093F\u092A\u0928\u094D\u0928", "\u091A\u094C\u0935\u0928\u094D\u0928", "\u092A\u091A\u094D\u092A\u0928\u094D\u0928", "\u091B\u092A\u0928\u094D\u0928", "\u0938\u0928\u094D\u0924\u093E\u0909\u0928\u094D\u0928", "\u0905\u0928\u094D\u0920\u093E\u0909\u0901\u0928\u094D\u0928", "\u0909\u0928\u093E\u0928\u094D\u0928\u094D\u0938\u093E\u0920\u0940 ", "\u0938\u093E\u0920\u0940", "\u090F\u0915\u0938\u093E\u0920\u0940", "\u092C\u093E\u0938\u093E\u0920\u0940", "\u0924\u0940\u0930\u0938\u093E\u0920\u0940", "\u091A\u094C\u0902\u0938\u093E\u0920\u0940", "\u092A\u0948\u0938\u093E\u0920\u0940", "\u091B\u0948\u0938\u0920\u0940", "\u0938\u0924\u094D\u0938\u0920\u094D\u0920\u0940", "\u0905\u0930\u094D\u0938\u0920\u094D\u0920\u0940", "\u0909\u0928\u0928\u094D\u0938\u0924\u094D\u0924\u0930\u0940", "\u0938\u0924\u0930\u0940", "\u090F\u0915\u0939\u0924\u094D\u0924\u0930", "\u092C\u0939\u0924\u094D\u0924\u0930", "\u0924\u094D\u0930\u093F\u0939\u0924\u094D\u0924\u0930", "\u091A\u094C\u0939\u0924\u094D\u0924\u0930", "\u092A\u091A\u0939\u0924\u094D\u0924\u0930", "\u091B\u0939\u0924\u094D\u0924\u0930", "\u0938\u0924\u094D\u0939\u0924\u094D\u0924\u0930", "\u0905\u0920\u094D\u0939\u0924\u094D\u0924\u0930", "\u0909\u0928\u093E\u0938\u094D\u0938\u0940", "\u0905\u0938\u094D\u0938\u0940", "\u090F\u0915\u093E\u0938\u0940", "\u092C\u092F\u093E\u0938\u0940", "\u0924\u094D\u0930\u0940\u092F\u093E\u0938\u0940", "\u091A\u094C\u0930\u093E\u0938\u0940", "\u092A\u091A\u093E\u0938\u0940", "\u091B\u092F\u093E\u0938\u0940", "\u0938\u0924\u093E\u0938\u0940", "\u0905\u0920\u093E\u0938\u0940", "\u0909\u0928\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u0928\u092C\u094D\u092C\u0947", "\u090F\u0915\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u092C\u092F\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u0924\u094D\u0930\u093F\u092F\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u091A\u094C\u0930\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u092A\u0902\u091A\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u091B\u092F\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u0938\u0928\u094D\u0924\u093E\u0928\u094D\u200D\u0928\u092C\u094D\u092C\u0947", "\u0905\u0928\u094D\u0920\u093E\u0928\u094D\u0928\u092C\u094D\u092C\u0947", "\u0909\u0928\u093E\u0928\u094D\u0938\u092F"], a = "", p = 0, E = "";
    if (e = e.toString(), e.indexOf(".") != -1) {
      var x = e.split(".");
      e = x[0], p = x[1];
      var G = p.substring(0, 2).toString();
      G.length == 1 && (G = G.toString() + "0"), E = n[parseInt(G)].toString() + " \u092A\u0948\u0938\u093E";
    }
    if (e.length > 13)
      return void alert("Number greater than kharab not supported");
    var f = Math.floor(e % 100), B = "";
    e.toString().length > 2 && (B = e.toString().substring(e.toString().length - 3, e.toString().length - 2));
    var t = Math.floor(e % 1e5);
    t = t.toString(), t = t.substring(0, t.length - 3);
    var y = Math.floor(e % 1e7);
    y = y.toString(), y = y.substring(0, y.length - 5);
    var g = Math.floor(e % 1e9);
    g = g.toString(), g = g.substring(0, g.length - 7);
    var D = Math.floor(e % 1e11);
    D = D.toString(), D = D.substring(0, D.length - 9);
    var w = Math.floor(e % 1e13);
    return w = w.toString(), w = w.substring(0, w.length - 11), w > 0 && (a += n[w] + " \u0916\u0930\u092C"), D > 0 && (a += " " + n[D] + " \u0905\u0930\u092C"), g > 0 && (a += " " + n[g] + " \u0915\u0930\u094B\u0921"), y > 0 && (a += " " + n[y] + " \u0932\u093E\u0916"), t > 0 && (a += " " + n[t] + " \u0939\u091C\u093E\u0930"), B > 0 && (a += " " + n[B] + " \u0938\u092F"), f > 0 && (a += " " + n[f]), a.trim() != "" && r && (a += " \u0930\u0941\u092A\u0948\u0902\u092F\u093E"), p > 0 && r && (a += (a.trim() != "" ? " " : "") + E), a.trim();
  }
  function V(e, r) {
    if (k(e) && k(r)) {
      e = this.BS2AD(e), r = this.BS2AD(r);
      var n = new Date(e.year, e.month - 1, e.day), a = new Date(r.year, r.month - 1, r.day);
      return n.getTime() > a.getTime();
    }
    return 1e4 * e.year + 100 * e.month + e.day > 1e4 * r.year + 100 * r.month + r.day;
  }
  var c = ["MM-DD-YYYY", "MM/DD/YYYY", "YYYY-MM-DD", "YYYY/MM/DD", "DD-MM-YYYY", "DD/MM/YYYY"];
  return {
    ParseDate: P,
    ValidateBsDate: k,
    CompareBsDates: V,
    ConvertToDateObject: C,
    ConvertDateFormat: U,
    AD2BS: j,
    BS2AD: $,
    GetCurrentAdDate: H,
    GetCurrentAdYear: z,
    GetCurrentAdMonth: q,
    GetCurrentAdDay: K,
    GetCurrentBsDate: I,
    GetCurrentBsYear: R,
    GetCurrentBsMonth: Q,
    GetCurrentBsDay: te,
    GetAdMonths: ne,
    GetAdMonth: oe,
    GetBsMonths: re,
    GetBsMonth: ue,
    GetBsDaysUnicode: X,
    GetBsDaysUnicodeShort: se,
    GetBsDayUnicode: ie,
    GetAdDays: W,
    GetAdDaysShort: Z,
    GetAdDay: J,
    GetBsMonthsInUnicode: O,
    GetBsMonthInUnicode: de,
    GetDaysInAdMonth: l,
    GetDaysInBsMonth: M,
    AdDatesDiff: h,
    BsDatesDiff: b,
    BsAddDays: s,
    GetBsFullDate: ee,
    GetAdFullDate: ce,
    GetAdFullDay: d,
    GetBsFullDay: o,
    GetBsFullDayInUnicode: i,
    ConvertToUnicode: v,
    ConvertToNumber: F,
    Get2DigitNo: N,
    NumberToWords: A,
    NumberToWordsUnicode: _
  };
}(), m = {
  ...ae,
  ConvertBsToAdDate: (S) => {
    const P = ae.BS2AD(S);
    return Date.parse(`${P.year}-${P.month}-${P.day}`);
  }
};
(function() {
  function S(o, i) {
    var d = o, s = i + 1;
    return s > 12 && (d += 1, s = 1), {
      year: d,
      month: s
    };
  }
  function P(o, i) {
    var d = o, s = i - 1;
    return s < 1 && (d -= 1, s = 12), {
      year: d,
      month: s
    };
  }
  function C() {
    Z = !0;
  }
  function U() {
    Z = !1;
  }
  function j(o) {
    var i = document.getElementById("ndp-nepali-box");
    i && i.remove(), W = !1;
  }
  function $(o) {
    var i = {};
    if (W)
      j();
    else {
      var d = document.getElementById(o);
      ie(o), i = O(o), ee = o;
      var s = d.value;
      i.unicodeDate && (s = m.ConvertToNumber(s));
      var h = "";
      s ? h = m.ConvertToDateObject(s, i.dateFormat) : (h = m.GetCurrentBsDate(), i.disableAfter && m.CompareBsDates(h, i.disableAfter) && (h = i.disableAfter));
      var b = null;
      h == null ? (h = m.GetCurrentBsDate(), b = "") : b = m.ConvertDateFormat(h, "YYYY-MM-DD"), k(h.year, h.month, b), z(d), W = !0;
    }
  }
  function k(o, i, d) {
    var s = document.getElementById("ndp-nepali-box"), h = O(null), b = h.language == "english", l = s.getElementsByTagName("table")[0].getElementsByTagName("tbody");
    l.length > 0 && l[0].parentNode.removeChild(l[0]);
    var M = h.ndpYearCount || 0, v = document.getElementById("currentMonth");
    v.innerHTML = "";
    var F = document.createElement("SPAN");
    F.innerHTML = " ";
    var N = document.createElement("SPAN");
    N.innerHTML = b ? m.GetBsMonth(i - 1) : m.GetBsMonthInUnicode(i - 1);
    var A = document.createElement("SPAN");
    A.innerHTML = b ? o : m.ConvertToUnicode(o), h.ndpMonth && h.ndpYear ? (v.appendChild(ne(i, o, d)), v.appendChild(oe(i, o, M, d))) : h.ndpMonth ? (v.appendChild(ne(i, o, d)), v.appendChild(F), v.appendChild(A)) : h.ndpYear ? (v.appendChild(N), v.appendChild(F), v.appendChild(oe(i, o, M, d))) : (v.appendChild(N), v.appendChild(F), v.appendChild(A));
    var _ = S(o, i), V = P(o, i), c = _.year, e = _.month, r = V.year, n = V.month, a = document.getElementById("ndp-header"), p = document.getElementById("prev");
    p && p.parentNode.removeChild(p);
    var E = document.getElementById("next");
    E && E.parentNode.removeChild(E);
    var x = !0;
    h.disableBefore && m.CompareBsDates(h.disableBefore, {
      year: r,
      month: n,
      day: m.GetDaysInBsMonth(r, n)
    }) && (x = !1);
    var G = document.createElement("SPAN");
    G.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg>', G.setAttribute("class", "ndc-chevron ndc-left");
    var f = document.createElement("A");
    f.setAttribute("id", "prev"), f.setAttribute("title", "Previous Month"), f.setAttribute("class", x ? "ndp-prev" : "ndp-prev ndp-disabled"), f.setAttribute("href", "javascript:void(0)"), f.appendChild(G), x && f.addEventListener("click", function() {
      k(r, n, d);
    });
    var B = !0;
    h.disableAfter && m.CompareBsDates({
      year: c,
      month: e,
      day: 1
    }, h.disableAfter) && (B = !1);
    var t = document.createElement("SPAN");
    t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>', t.setAttribute("class", "ndc-chevron ndc-right");
    var y = document.createElement("A");
    y.setAttribute("id", "next"), y.setAttribute("title", "Next Month"), y.setAttribute("class", B ? "ndp-next" : "ndp-next ndp-disabled"), y.setAttribute("href", "javascript:void(0)"), y.appendChild(t), B && y.addEventListener("click", function() {
      k(c, e, d);
    }), a.appendChild(f), a.appendChild(y), s.getElementsByTagName("table")[0].insertAdjacentElement("beforeend", H(o, i, d));
  }
  function H(o, i, d) {
    var s, h, b, l = O(null), M = l.language == "english";
    if (d) {
      var v = m.ConvertToDateObject(d, "YYYY-MM-DD");
      s = v.year, h = v.month, b = v.day;
    }
    var F = m.GetCurrentBsDate(), N = F.year, A = F.month, _ = F.day, V = m.GetDaysInBsMonth(o, i), c = {
      year: o,
      month: i,
      day: 1
    }, e = m.BS2AD(c), r = e.year, n = e.month, a = e.day, p = new Date(r, n - 1, a), E = p.getDay(), x = 0, G = 0, f = E + V, B = "", t = "", y = 0;
    typeof l.disableBefore != "object" && l.disableBefore && l.dateFormat && (l.disableBefore = m.ConvertToDateObject(l.disableBefore, l.dateFormat)), typeof l.disableAfter != "object" && l.disableAfter && l.dateFormat && (l.disableAfter = m.ConvertToDateObject(l.disableAfter, l.dateFormat)), !l.disableBefore && Number.isInteger(l.disableDaysBefore) && parseInt(l.disableDaysBefore) >= 0 && (l.disableBefore = m.BsAddDays(m.GetCurrentBsDate(), -1 * parseInt(l.disableDaysBefore))), !l.disableAfter && Number.isInteger(l.disableDaysAfter) && parseInt(l.disableDaysAfter) >= 0 && (l.disableAfter = m.BsAddDays(m.GetCurrentBsDate(), parseInt(l.disableDaysAfter)));
    for (var g = document.createElement("TBODY"), D = document.createElement("TR"), w = document.createElement("TD"), u = document.createElement("A"); G < f; ) {
      if (x = G, x % 7 == 0 && (D = document.createElement("TR")), y = x - E + 1, t = o.toString() + "-" + m.Get2DigitNo(i) + "-" + m.Get2DigitNo(y), B = "", B = o === s && i === h && y === b ? "ndp-selected" : o === N && i === A && y === _ ? "ndp-current" : "ndp-date", x < E)
        w = document.createElement("TD"), D.appendChild(w);
      else {
        if (w = document.createElement("TD"), w.setAttribute("class", B), l.disableAfter && m.CompareBsDates(m.ConvertToDateObject(t, "YYYY-MM-DD"), l.disableAfter) || l.disableBefore && m.CompareBsDates(l.disableBefore, m.ConvertToDateObject(t, "YYYY-MM-DD")))
          u = document.createElement("A"), u.setAttribute("class", "ndp-disabled"), u.setAttribute("href", "javascript:void(0)"), u.setAttribute("title", t), u.innerHTML = M ? y : m.ConvertToUnicode(y), w.appendChild(u);
        else {
          var Y = m.ConvertToDateObject(t, "YYYY-MM-DD"), T = m.ConvertDateFormat(Y, l.dateFormat);
          u = document.createElement("A"), u.setAttribute("href", "javascript:void(0)"), u.setAttribute("title", t), u.setAttribute("data-value", T), u.innerHTML = M ? y : m.ConvertToUnicode(y), u.addEventListener("click", function() {
            te(this);
          }), w.appendChild(u);
        }
        D.appendChild(w);
      }
      x % 7 == 6 && (g.appendChild(D), D = document.createElement("TR")), G += 1;
    }
    return D.children.length > 0 && g.appendChild(D), g;
  }
  function z(o) {
    var i = q(o), d = R(i), s = Q(o, i), h = document.getElementById("ndp-nepali-box"), b = h.offsetHeight, l = i.y + o.offsetHeight;
    s < b && s < d && (l = l - b - o.offsetHeight), h.style.top = l + "px", h.style.left = i.x + "px";
  }
  function q(o) {
    if (O().container != "body") {
      var i = o.getBoundingClientRect();
      return {
        x: i.x,
        y: i.y
      };
    }
    var d = 0, s = 0;
    return d += K(o), s += I(o), {
      x: d,
      y: s
    };
  }
  function K(o) {
    for (var i = 0; o; )
      i += o.offsetLeft, o = o.offsetParent;
    return i += document.firstChild.offsetLeft || 0;
  }
  function I(o) {
    for (var i = 0; o; )
      i += o.offsetTop, o = o.offsetParent;
    return i += document.firstChild.offsetTop || 0;
  }
  function R(o) {
    var i = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return o.y - i;
  }
  function Q(o, i) {
    var d = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return window.innerHeight - i.y - o.offsetHeight + d;
  }
  function te(o) {
    var i = o.getAttribute("data-value"), d = O(), s = m.ConvertToDateObject(i, d.dateFormat);
    d.ndpEnglishInput && (document.getElementById(d.ndpEnglishInput).value = m.ConvertDateFormat(m.BS2AD(s), d.dateFormat)), document.getElementById(ee).value = d.unicodeDate ? m.ConvertToUnicode(i) : i, d.onChange && d.onChange({
      bs: i,
      ad: m.ConvertDateFormat(m.BS2AD(s), d.dateFormat),
      object: s
    }), j();
  }
  function ne(o, i, d) {
    var s = O(), h = s.language == "english", b = 1, l = 12;
    s.disableBefore && s.disableBefore.year == i && (b = s.disableBefore.month), s.disableAfter && s.disableAfter.year == i && (l = s.disableAfter.month);
    var M = h ? m.GetBsMonths() : m.GetBsMonthsInUnicode(), v = document.createElement("SELECT");
    return v.setAttribute("id", "ndp-month-select"), M.forEach(function(F, N) {
      if (N >= b - 1 && N <= l - 1) {
        var A = document.createElement("OPTION");
        A.setAttribute("value", N + 1), A.innerHTML = F, N + 1 == o && A.setAttribute("selected", "selected"), v.appendChild(A);
      }
    }), v.addEventListener("change", function() {
      re(i, d);
    }), v;
  }
  function oe(o, i, d, s) {
    var h = O(), b = h.language == "english", l = 1970, M = 2099;
    h.disableBefore && h.disableBefore.year > l && (l = h.disableBefore.year), h.disableAfter && h.disableAfter.year < M && (M = h.disableAfter.year);
    var v = document.createElement("SELECT");
    v.setAttribute("id", "ndp-year-select");
    for (var F = Math.round(d / 2) > 0 && parseInt(i) - Math.round(d / 2) >= l ? parseInt(i) - Math.round(d / 2) : l, N = Math.round(d / 2) > 0 && parseInt(i) + Math.round(d / 2) <= M ? parseInt(i) + Math.round(d / 2) : M; F <= N; ) {
      var A = document.createElement("OPTION");
      A.setAttribute("value", F), A.innerHTML = b ? F : m.ConvertToUnicode(F), i == F && A.setAttribute("selected", "selected"), v.appendChild(A), F += 1;
    }
    return v.addEventListener("change", function() {
      ue(o, s);
    }), v;
  }
  function re(o, i) {
    o = O().ndpYear ? parseInt(document.getElementById("ndp-year-select").value) : o, k(o, parseInt(document.getElementById("ndp-month-select").value), i);
  }
  function ue(o, i) {
    var d = O(), s = document.getElementById("ndp-year-select"), h = document.getElementById("ndp-month-select"), b = parseInt(s.value);
    o = d.ndpMonth ? parseInt(h.value) : o;
    var l = d.disableDaysBefore, M = d.disableDaysAfter;
    l && l.year == b && o <= l.month && (o = l.month), M && M.year == b && o >= M.month && (o = M.month), k(b, o, i);
  }
  function O(o) {
    var i = {};
    if (o || (o = ee), o) {
      var d = J[o], s = d.dateFormat || "YYYY-MM-DD", h = d.disableBefore ? m.ConvertToDateObject(d.disableBefore, s) : {
        year: 1970,
        month: 1,
        day: 1
      }, b = d.disableAfter ? m.ConvertToDateObject(d.disableAfter, s) : {
        year: 2099,
        month: 12,
        day: 30
      }, l = d.disableDaysBefore || (d.disableDaysBefore == 0 ? 0 : null), M = d.disableDaysAfter || (d.disableDaysAfter == 0 ? 0 : null);
      Number.isInteger(l) && l >= 0 && (h = m.BsAddDays(m.GetCurrentBsDate(), -1 * l)), Number.isInteger(M) && M >= 0 && (b = m.BsAddDays(m.GetCurrentBsDate(), M)), d && (i = {
        ndpTriggerButton: d.ndpTriggerButton || null,
        ndpTriggerButtonClass: d.ndpTriggerButtonClass || null,
        ndpTriggerButtonText: d.ndpTriggerButtonText || null,
        ndpEnglishInput: d.ndpEnglishInput || null,
        ndpYearCount: d.ndpYearCount || null,
        ndpYear: d.ndpYear || null,
        ndpMonth: d.ndpMonth || null,
        disableDaysBefore: l,
        disableDaysAfter: M,
        disableBefore: h,
        disableAfter: b,
        dateFormat: s,
        onChange: d.onChange || null,
        unicodeDate: d.unicodeDate || null,
        readOnlyInput: d.readOnlyInput || !1,
        container: d.container || "body",
        language: d.language || "nepali"
      });
    }
    return i;
  }
  function de() {
    var o = document.activeElement, i = o.getAttribute("id");
    j(), $(i);
  }
  function X() {
    var o = window.event || arguments.callee.caller.arguments[0];
    o.which == 27 && (j(), o.stopPropagation());
  }
  function ie(o) {
    if (!document.getElementById("ndp-nepali-box")) {
      var i = O(o);
      document.querySelector(i.container).insertAdjacentElement("beforeend", se(i));
      var d = document.getElementById("ndp-nepali-box");
      d.addEventListener("mouseenter", C), d.addEventListener("mouseleave", U);
    }
  }
  function se(o) {
    var i = o.language == "english", d = document.createElement("DIV");
    d.setAttribute("id", "ndp-nepali-box"), d.setAttribute("tabindex", "-1"), d.setAttribute("class", "ndp-corner-all"), d.addEventListener("keydown", X);
    var s = document.createElement("DIV");
    s.setAttribute("id", "ndp-header"), s.setAttribute("class", "ndp-corner-all ndp-header");
    var h = document.createElement("SPAN");
    h.setAttribute("id", "currentMonth"), s.appendChild(h);
    var b = document.createElement("DIV");
    b.setAttribute("id", "currentMonth");
    var l = document.createElement("TABLE");
    b.setAttribute("id", "ndp-table");
    var M = document.createElement("TR");
    M.setAttribute("class", "ndp-days"), (i ? m.GetAdDaysShort() : m.GetBsDaysUnicodeShort()).forEach(function(N) {
      var A = document.createElement("TH");
      A.innerHTML = N, M.appendChild(A);
    });
    var v = document.createElement("THEAD");
    v.appendChild(M);
    var F = document.createElement("TBODY");
    return l.appendChild(v), l.appendChild(F), b.appendChild(l), d.appendChild(s), d.appendChild(b), d;
  }
  var W = !1, Z = !1, J = [], ee = null;
  function ce(o, i) {
    let d = o.target.value;
    const s = m.ConvertToDateObject(d, i.dateFormat);
    if ((d == null ? void 0 : d.split("-").length) == 3) {
      i.onChange({
        bs: d,
        ad: m.ConvertDateFormat(m.BS2AD(s), i.dateFormat),
        object: U
      });
      const h = document.getElementById("ndp-nepali-box");
      h && h.remove();
    }
  }
  Object.prototype.nepaliDatePicker = function(o) {
    function i(c) {
      c.classList.remove("ndp-nepali-calendar"), c.removeAttribute("ndp-calendar-data"), c.removeAttribute("readonly"), c.removeEventListener("focus", de), c.removeEventListener("mouseenter", C), c.removeEventListener("mouseleave", U), c.removeEventListener("keydown", X);
      var e = c.getAttribute("id");
      delete J[e];
      var r = c.nextSibling;
      r && r.tagName == "BUTTON" && r.getAttribute("id") == "ndp-click-trigger" && r.parentNode.removeChild(r);
    }
    function d(c, e) {
      var r = c.getAttribute("id");
      if (J[r] = e, J[r].raw = s(e), c.value) {
        var n = m.ParseDate(c.value);
        n && n.parsedFormat && (e.dateFormat = e.dateFormat ? e.dateFormat : n.parsedFormat);
      }
    }
    function s(c) {
      if (c == null || typeof c != "object")
        return c;
      var e = c.constructor();
      for (var r in c)
        c.hasOwnProperty(r) && (e[r] = c[r]);
      return e;
    }
    function h(c, e) {
      for (var r = !1; c; )
        c.getAttribute("id") == e && (r = !0, c = null), c = c ? c.offsetParent : null;
      return r;
    }
    function b() {
      var c = document.getElementById(ee), e = document.activeElement, r = c == e, n = h(e, "ndp-nepali-box"), a = e.getAttribute("id") == "ndp-click-trigger", p = e.getAttribute("id") == "ndp-month-select" || e.getAttribute("id") == "ndp-year-select";
      (e.tagName == "BODY" || n || a) && (r = !0), W && (!Z && !p || Z && !r) && j();
    }
    function l(c, e) {
      var r = c.getAttribute("id");
      if (r == null) {
        var n = btoa(new Date().toISOString() + Math.random());
        c.setAttribute("id", n);
      }
      if (c.classList.add("ndp-nepali-calendar"), d(c, e), e.ndpTriggerButton || c.addEventListener("focus", de), c.addEventListener("blur", b), c.setAttribute("autocomplete", "off"), c.addEventListener("keydown", X), e.readOnlyInput && c.setAttribute("readonly", "readonly"), e.ndpTriggerButton) {
        var a = e.ndpTriggerButtonClass && e.ndpTriggerButtonClass !== "" ? e.ndpTriggerButtonClass : "", p = e.ndpTriggerButtonText && e.ndpTriggerButtonText !== "" ? e.ndpTriggerButtonText : "Pick Date", E = document.createElement("BUTTON");
        E.setAttribute("id", "ndp-click-trigger"), E.setAttribute("class", a), E.addEventListener("click", function() {
          F(r);
        }), E.addEventListener("blur", M), E.innerHTML = p, c.insertAdjacentElement("afterend", E);
      }
    }
    function M() {
      b();
    }
    function v() {
      var c = document.getElementById("ndp-nepali-box");
      return c && parseInt(c.style.top) > 0;
    }
    function F(c) {
      V || (V = !0, v() ? j() : $(c), V = !1);
    }
    var N = this;
    if (o != "remove") {
      if (o = o === void 0 ? {} : o, N.length && N.length > 0)
        for (var A = 0; A < N.length; A++)
          l(N[A], o);
      else
        l(N, o);
      var _ = document.querySelectorAll(".ndp-nepali-calendar");
      if (_.length > 0)
        for (var A = 0; A < _.length; A++)
          _[A].addEventListener("mouseenter", C), _[A].addEventListener("mouseleave", U);
      window.addEventListener("mouseup", function() {
        v() && (document.activeElement.getAttribute("id") == "ndp-click-trigger" || b());
      });
      const c = Array.from(document.getElementsByClassName("ndp-nepali-calendar"));
      o.readOnlyInput || c.forEach((e) => {
        e.addEventListener("focusout", (r) => {
          ce(r, o);
        });
      });
      var V = !1;
    } else if (N.length && N.length > 0)
      for (var A = 0; A < N.length; A++)
        i(N[A]);
    else
      i(N);
  }, Object.defineProperty(Object.prototype, "nepaliDatePicker", {
    enumerable: !1,
    value: nepaliDatePicker
  });
})();
const Ne = (S) => (Ce("data-v-a090d5c9"), S = S(), Ye(), S), Ee = { class: "wrapper" }, Te = ["value", "disabled", "readonly"], we = ["onClick"], Se = /* @__PURE__ */ Ne(() => /* @__PURE__ */ le("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ le("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1)), Ie = [
  Se
], Fe = /* @__PURE__ */ fe({
  __name: "VNepaliDatePicker",
  props: {
    modelValue: null,
    nepaliDate: null,
    allowClear: { type: Boolean },
    inputClasses: null,
    nepaliDateFormat: null,
    yearSelect: { type: Boolean },
    monthSelect: { type: Boolean },
    yearCount: null,
    min: null,
    max: null,
    allowedPastDays: null,
    allowedFutureDays: null,
    language: null,
    disabled: { type: Boolean },
    allowInput: { type: Boolean }
  },
  emits: ["update:modelValue", "update:nepaliDate"],
  setup(S, { emit: P }) {
    const C = S, U = ye(null), j = me(() => ({
      allowedPastDays: C.allowedPastDays,
      yearSelect: C.yearSelect,
      monthSelect: C.monthSelect,
      yearCount: C.yearCount,
      nepaliDateFormat: C.nepaliDateFormat,
      allowedFutureDays: C.allowedFutureDays,
      min: C.min,
      max: C.max,
      language: C.language,
      allowInput: C.allowInput
    })), $ = me(() => {
      var I;
      return (I = C.nepaliDateFormat) != null ? I : "MM/DD/YYYY";
    }), k = me(() => z(C.modelValue)), H = () => {
      P("update:modelValue", null);
    };
    function z(I) {
      if (I == null)
        return "";
      const R = m.AD2BS({
        year: I.getFullYear(),
        month: I.getMonth() + 1,
        day: I.getDate()
      });
      return m.ConvertDateFormat(R, $.value);
    }
    function q(I) {
      P("update:nepaliDate", I);
    }
    he(() => j.value, () => {
      K();
    }, { deep: !0 }), he(() => k.value, (I) => {
      q(I);
    }), pe(() => {
      K(), q(k.value);
    });
    function K() {
      var I, R, Q;
      U.value.nepaliDatePicker({
        dateFormat: $.value,
        ndpYear: C.yearSelect,
        ndpMonth: C.monthSelect,
        ndpYearCount: (I = C.yearCount) != null ? I : 10,
        disableBefore: z(C.min),
        disableAfter: z(C.max),
        disableDaysBefore: (R = C.allowedPastDays) != null ? R : -1,
        disableDaysAfter: (Q = C.allowedFutureDays) != null ? Q : -1,
        readOnlyInput: !C.allowInput,
        language: C.language,
        onChange(te) {
          P("update:modelValue", new Date(te.ad));
        }
      });
    }
    return (I, R) => (ve(), ge("div", Ee, [
      le("input", {
        type: "text",
        placeholder: "yyyy-mm-dd",
        ref_key: "elm",
        ref: U,
        value: be(k),
        class: De(S.inputClasses),
        disabled: S.disabled,
        readonly: !C.allowInput
      }, null, 10, Te),
      S.allowClear && !S.disabled ? Ae(I.$slots, "clear-btn", {
        key: 0,
        onClear: H
      }, () => [
        le("span", {
          class: "clear-btn",
          onClick: Be(H, ["prevent"])
        }, Ie, 8, we)
      ], !0) : Me("", !0)
    ]));
  }
});
const xe = (S, P) => {
  const C = S.__vccOpts || S;
  for (const [U, j] of P)
    C[U] = j;
  return C;
}, Ge = /* @__PURE__ */ xe(Fe, [["__scopeId", "data-v-a090d5c9"]]);
export {
  m as NepaliFunctions,
  Ge as VNepaliDatePicker
};
