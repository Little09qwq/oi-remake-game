const problemPoolByLevel = {
  1: [
    {
      name: "book",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 50, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sort",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 70, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "array",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 40, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 70, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "count",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  2: [
    {
      name: "duel",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sequence",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "tree",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "path",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "parse",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "certificate",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "line",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 0, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clock",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authenticate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bar",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "host",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bool",
      parts: [
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "queue",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "server",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "batch",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 85, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delete",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sentence",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "warning",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bridge",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "auto",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 32, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "route",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "allow",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "return",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "router",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "node",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "file",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "range",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "peer",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 45, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "translate",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 2, trap: 1, score: 56, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "public",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 30, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "void",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "image",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "animate",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "order",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "texture",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scope",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "resize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "class",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "handler",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "float",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "trigger",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "menu",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "progress",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "field",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "offset",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "extern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "diagram",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "test",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "if",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "deny",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "static",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 0, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "event",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graph",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shade",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "log",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "alloc",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "delay",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "button",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 1, score: 80, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "client",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hash",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "char",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "check",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "const",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "port",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 28, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "string",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "proxy",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "input",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 1, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "having",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "modal",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "zoom",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "authorize",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protected",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 0, trap: 0, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "enum",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "level",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shell",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "new",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sign",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "checkbox",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "filter",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "query",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "duplicate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  3: [
    {
      name: "door",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "dynamic",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 65, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "search",
      parts: [
        {
          dp: 1, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 0, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 2, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flag",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "group",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 0, trap: 1, score: 85, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "decrypt",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "grid",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 0, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "reference",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "match",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decode",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "password",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 1, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "directory",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 0, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "result",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "boolean",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 0, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 4, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "style",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "title",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "switch",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 52, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 4, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "process",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 4, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "picture",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 0, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 3, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "table",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "font",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cluster",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "compare",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "job",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "number",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 0, coding: 1, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transition",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 1, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "expand",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 0, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "audio",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shift",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "folder",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "equal",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "edge",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "letter",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "value",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 1, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 1, detail: 0, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "flip",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hardware",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "config",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 0, score: 90, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "interval",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "panel",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 0, trap: 0, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "content",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 0, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "option",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 0, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "cache",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "free",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 2, score: 72, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 2, thinking: 4, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pool",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "message",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 4, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "tone",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "interface",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "rotate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "state",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "text",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "calculate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 0, coding: 2, detail: 2, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 3, thinking: 0, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "security",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 1, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "encrypt",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "phase",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 1, thinking: 3, coding: 2, detail: 0, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "request",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 2, detail: 2, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  4: [
    {
      name: "detect",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 1, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 3, trap: 0, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "catfood",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 35, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 0, trap: 0, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "lucky",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 100, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "network",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 50, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 3, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "segment",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 60, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "optimize",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 65, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 2, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "cookie",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 5, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "select",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 3, coding: 1, detail: 1, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 4, coding: 1, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "gradient",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "long",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 2, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 1, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 1, score: 60, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 1, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 1, score: 75, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 1, adhoc: 3, thinking: 4, coding: 1, detail: 2, trap: 1, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "pattern",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "deserialize",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 1, trap: 0, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 1, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "worker",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 44, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "increment",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "thread",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 1, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 1, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "protocol",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 4, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 1, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "malloc",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 1, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "when",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 1, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 1, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 3, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 1, trap: 0, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 4, combinatorics: 0, adhoc: 2, thinking: 5, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "limit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 3, trap: 0, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 4, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "debug",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 1, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 3, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 2, thinking: 1, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "extract",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 0, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "serialize",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 0, thinking: 3, coding: 2, detail: 1, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 0, thinking: 5, coding: 3, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "channel",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "insert",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 3, coding: 1, detail: 1, trap: 2, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 1, adhoc: 1, thinking: 4, coding: 3, detail: 1, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 1, adhoc: 1, thinking: 5, coding: 3, detail: 1, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "link",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 3, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "volatile",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 1, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "point",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 1, detail: 0, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 1, detail: 1, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 1, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "layout",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 0, score: 28, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 4, trap: 1, score: 40, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 1, detail: 5, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "color",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "label",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 4, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "copy",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 0, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 4, adhoc: 1, thinking: 3, coding: 3, detail: 1, trap: 1, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 4, adhoc: 1, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shrink",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 1, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "slide",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 2, detail: 2, trap: 0, score: 75, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 5, trap: 1, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "exception",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 1, detail: 1, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 3, detail: 2, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "join",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 0, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 5, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "private",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 0, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 1, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 2, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "multiply",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 4, trap: 2, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "record",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 5, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "mode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 2, trap: 1, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 3, detail: 3, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "console",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 0, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 2, detail: 1, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "int",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 3, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 1, trap: 0, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 2, trap: 1, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  5: [
    {
      name: "edit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 4, trap: 1, score: 40, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 0, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 2, detail: 6, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "move",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 2, detail: 5, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "flow",
      parts: [
        {
          dp: 2, ds: 2, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 4, combinatorics: 1, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 45, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 6, combinatorics: 2, adhoc: 3, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "game",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 1, combinatorics: 2, adhoc: 2, thinking: 3, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 2, string: 0, graph: 2, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 2, trap: 1, score: 55, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 2, string: 0, graph: 2, combinatorics: 4, adhoc: 3, thinking: 4, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "mark",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 4, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 5, combinatorics: 0, adhoc: 4, thinking: 3, coding: 2, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "encode",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 1, graph: 2, combinatorics: 0, adhoc: 4, thinking: 2, coding: 1, detail: 6, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 5, string: 1, graph: 2, combinatorics: 0, adhoc: 4, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "gateway",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 3, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 5, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "greater",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 3, adhoc: 2, thinking: 2, coding: 2, detail: 5, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 3, adhoc: 3, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "unsigned",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 5, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "memory",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 0, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 3, trap: 1, score: 90, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "transform",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 3, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 4, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 5, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 2, coding: 3, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "callback",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 0, trap: 0, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 1, trap: 1, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 5, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "argument",
      parts: [
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 1, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 5, thinking: 6, coding: 4, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "shadow",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 1, detail: 4, trap: 1, score: 56, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 1, detail: 4, trap: 3, score: 60, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 4, graph: 0, combinatorics: 5, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "curve",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 3, adhoc: 0, thinking: 4, coding: 3, detail: 2, trap: 1, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 2, graph: 0, combinatorics: 3, adhoc: 0, thinking: 4, coding: 4, detail: 3, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 2, graph: 0, combinatorics: 3, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "permit",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 3, detail: 5, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 3, coding: 4, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "less",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 4, detail: 2, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "else",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 2, detail: 3, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "validate",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 3, detail: 1, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 6, coding: 4, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "service",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 6, coding: 3, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 6, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "icon",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "clone",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 0, coding: 3, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 2, coding: 4, detail: 5, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 5, thinking: 2, coding: 4, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "alert",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 2, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 3, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "combine",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 2, detail: 4, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 4, thinking: 3, coding: 3, detail: 5, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "error",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 2, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 0, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 2, trap: 2, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 5, thinking: 5, coding: 3, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "list",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 3, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 4, thinking: 5, coding: 3, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "schedule",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 2, detail: 2, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 3, thinking: 3, coding: 3, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 3, detail: 5, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "video",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 3, detail: 2, trap: 2, score: 72, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 1, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "add",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 5, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "media",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 2, detail: 1, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 3, adhoc: 3, thinking: 4, coding: 2, detail: 2, trap: 3, score: 75, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 5, graph: 0, combinatorics: 4, adhoc: 4, thinking: 6, coding: 2, detail: 2, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "pipe",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 3, detail: 2, trap: 2, score: 28, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 4, trap: 2, score: 60, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "parameter",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 2, coding: 2, detail: 4, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 2, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "paragraph",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 2, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 4, thinking: 2, coding: 3, detail: 3, trap: 4, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 1, combinatorics: 0, adhoc: 5, thinking: 2, coding: 3, detail: 4, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 0, adhoc: 5, thinking: 2, coding: 3, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "word",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 3, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 3, trap: 4, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "timer",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 1, trap: 0, score: 25, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 4, detail: 5, trap: 1, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 4, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "radio",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 1, coding: 1, detail: 3, trap: 1, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 1, coding: 2, detail: 4, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 5, thinking: 2, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "verify",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 3, combinatorics: 0, adhoc: 0, thinking: 2, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 4, combinatorics: 0, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 0, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 4, combinatorics: 0, adhoc: 1, thinking: 5, coding: 1, detail: 1, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 4, combinatorics: 0, adhoc: 1, thinking: 6, coding: 1, detail: 1, trap: 1, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 4, combinatorics: 0, adhoc: 2, thinking: 6, coding: 3, detail: 2, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  6: [
    {
      name: "traverse",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 0, score: 24, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 1, trap: 0, score: 40, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 2, thinking: 2, coding: 2, detail: 4, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 3, combinatorics: 6, adhoc: 3, thinking: 5, coding: 3, detail: 5, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "soldier",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 2, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 7, coding: 2, detail: 5, trap: 0, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 7, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 7, coding: 2, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "matching",
      parts: [
        {
          dp: 2, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 2, thinking: 3, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 4, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 3, trap: 1, score: 30, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 3, string: 0, graph: 5, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 5, trap: 2, score: 65, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 6, ds: 6, string: 0, graph: 5, combinatorics: 6, adhoc: 2, thinking: 5, coding: 2, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "system",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 1, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 4, trap: 0, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 3, graph: 1, combinatorics: 0, adhoc: 6, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scale",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 1, coding: 3, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 3, coding: 3, detail: 3, trap: 2, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 5, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "dark",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 3, thinking: 4, coding: 4, detail: 3, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 4, thinking: 5, coding: 4, detail: 5, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 3, combinatorics: 2, adhoc: 5, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "graphic",
      parts: [
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 2, graph: 2, combinatorics: 0, adhoc: 0, thinking: 4, coding: 3, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 4, graph: 2, combinatorics: 0, adhoc: 0, thinking: 5, coding: 4, detail: 4, trap: 3, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 5, graph: 2, combinatorics: 0, adhoc: 1, thinking: 6, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "hub",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 5, detail: 5, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 5, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "short",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 0, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 0, thinking: 1, coding: 3, detail: 0, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 0, thinking: 2, coding: 4, detail: 2, trap: 0, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 0, thinking: 5, coding: 5, detail: 3, trap: 1, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 0, thinking: 5, coding: 5, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "abstract",
      parts: [
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 1, score: 25, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 4, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, coding: 4, detail: 3, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 6, thinking: 7, coding: 5, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "continue",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 3, detail: 4, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 4, coding: 4, detail: 5, trap: 4, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 5, thinking: 5, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "struct",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 1, combinatorics: 2, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 0, graph: 2, combinatorics: 3, adhoc: 0, thinking: 1, coding: 2, detail: 4, trap: 4, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 4, string: 0, graph: 2, combinatorics: 4, adhoc: 0, thinking: 1, coding: 5, detail: 6, trap: 4, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 0, graph: 2, combinatorics: 6, adhoc: 0, thinking: 3, coding: 5, detail: 7, trap: 4, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "photo",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 2, thinking: 6, coding: 2, detail: 3, trap: 2, score: 50, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 4, combinatorics: 3, adhoc: 3, thinking: 6, coding: 2, detail: 4, trap: 2, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 6, combinatorics: 3, adhoc: 3, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "block",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 3, adhoc: 3, thinking: 4, coding: 5, detail: 3, trap: 3, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 2, combinatorics: 3, adhoc: 3, thinking: 5, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "catch",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 3, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 4, coding: 3, detail: 3, trap: 1, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 6, thinking: 6, coding: 3, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "setting",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 0, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 4, detail: 3, trap: 4, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 4, detail: 3, trap: 4, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 6, coding: 4, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "index",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 2, thinking: 2, coding: 2, detail: 2, trap: 1, score: 16, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 0, adhoc: 4, thinking: 6, coding: 2, detail: 3, trap: 3, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 1, combinatorics: 0, adhoc: 5, thinking: 6, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "while",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 4, detail: 3, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 4, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 5, detail: 6, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "kernel",
      parts: [
        {
          dp: 1, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 1, score: 20, independent: 1, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 6, trap: 2, score: 68, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 7, trap: 3, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "form",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 2, detail: 3, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 3, detail: 5, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 4, thinking: 0, coding: 3, detail: 6, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 2, graph: 1, combinatorics: 0, adhoc: 5, thinking: 3, coding: 3, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "effect",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 2, adhoc: 0, thinking: 3, coding: 2, detail: 2, trap: 0, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 4, adhoc: 1, thinking: 3, coding: 3, detail: 3, trap: 2, score: 45, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 2, combinatorics: 5, adhoc: 1, thinking: 3, coding: 4, detail: 4, trap: 2, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 5, graph: 2, combinatorics: 6, adhoc: 2, thinking: 5, coding: 4, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "column",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 3, graph: 0, combinatorics: 1, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 3, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 2, detail: 4, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 4, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 2, detail: 4, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 4, graph: 0, combinatorics: 3, adhoc: 2, thinking: 3, coding: 4, detail: 7, trap: 3, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "map",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 0, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 2, coding: 3, detail: 1, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 3, detail: 2, trap: 2, score: 90, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 7, coding: 3, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "final",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 4, thinking: 1, coding: 2, detail: 1, trap: 1, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 4, thinking: 1, coding: 3, detail: 2, trap: 2, score: 36, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 6, thinking: 4, coding: 3, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "scroll",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 4, combinatorics: 0, adhoc: 3, thinking: 5, coding: 1, detail: 2, trap: 4, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 4, combinatorics: 0, adhoc: 6, thinking: 7, coding: 3, detail: 3, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "break",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 0, thinking: 2, coding: 1, detail: 3, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 6, string: 1, graph: 0, combinatorics: 6, adhoc: 0, thinking: 4, coding: 5, detail: 6, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "view",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 2, coding: 1, detail: 2, trap: 0, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 1, thinking: 3, coding: 2, detail: 4, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 2, adhoc: 1, thinking: 3, coding: 4, detail: 4, trap: 2, score: 44, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 4, adhoc: 1, thinking: 6, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    }
  ],
  7: [
    {
      name: "update",
      parts: [
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 1, adhoc: 3, thinking: 1, coding: 1, detail: 2, trap: 2, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 2, adhoc: 3, thinking: 3, coding: 1, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 2, adhoc: 3, thinking: 4, coding: 2, detail: 3, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 2, adhoc: 4, thinking: 5, coding: 3, detail: 4, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 3, adhoc: 6, thinking: 6, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "split",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 0, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 1, detail: 1, trap: 1, score: 28, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 3, adhoc: 5, thinking: 7, coding: 1, detail: 3, trap: 4, score: 64, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 6, adhoc: 6, thinking: 7, coding: 4, detail: 5, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "document",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 3, detail: 4, trap: 1, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 5, coding: 5, detail: 4, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 2, adhoc: 7, thinking: 7, coding: 5, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "row",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 0, coding: 3, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 3, coding: 3, detail: 5, trap: 4, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 4, coding: 5, detail: 6, trap: 5, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 3, string: 0, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "unite",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 3, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 3, detail: 2, trap: 3, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 7, coding: 5, detail: 3, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 8, coding: 5, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "domain",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 0, combinatorics: 1, adhoc: 4, thinking: 2, coding: 2, detail: 3, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 5, graph: 0, combinatorics: 1, adhoc: 5, thinking: 3, coding: 3, detail: 6, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 2, adhoc: 6, thinking: 4, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "type",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 1, trap: 3, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 2, trap: 5, score: 30, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 3, thinking: 1, coding: 3, detail: 5, trap: 5, score: 70, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 7, trap: 5, score: 80, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 7, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 8, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "task",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 1, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 5, detail: 1, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 1, thinking: 5, coding: 5, detail: 3, trap: 4, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 1, thinking: 7, coding: 6, detail: 5, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "try",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 3, thinking: 3, coding: 4, detail: 2, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 6, thinking: 8, coding: 5, detail: 4, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 2, graph: 0, combinatorics: 2, adhoc: 7, thinking: 8, coding: 6, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "case",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 2, detail: 2, trap: 2, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 3, adhoc: 2, thinking: 4, coding: 3, detail: 3, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 4, adhoc: 3, thinking: 8, coding: 6, detail: 4, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "component",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 3, graph: 0, combinatorics: 2, adhoc: 1, thinking: 2, coding: 3, detail: 1, trap: 1, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 3, adhoc: 4, thinking: 2, coding: 4, detail: 3, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 5, graph: 0, combinatorics: 5, adhoc: 5, thinking: 7, coding: 5, detail: 5, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "signed",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 3, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 5, coding: 5, detail: 6, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 5, coding: 6, detail: 7, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 4, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 5, coding: 6, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "method",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 3, trap: 3, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 0, adhoc: 5, thinking: 4, coding: 4, detail: 6, trap: 3, score: 68, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 5, thinking: 4, coding: 5, detail: 8, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "token",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 1, combinatorics: 2, adhoc: 4, thinking: 3, coding: 2, detail: 1, trap: 4, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 3, adhoc: 4, thinking: 3, coding: 2, detail: 1, trap: 5, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 2, combinatorics: 3, adhoc: 5, thinking: 5, coding: 3, detail: 2, trap: 5, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 2, combinatorics: 3, adhoc: 5, thinking: 8, coding: 4, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "heading",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 1, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 3, thinking: 3, coding: 2, detail: 6, trap: 3, score: 65, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 6, adhoc: 3, thinking: 3, coding: 3, detail: 6, trap: 3, score: 75, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 7, adhoc: 5, thinking: 5, coding: 4, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "convert",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 1, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 5, detail: 3, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 5, graph: 0, combinatorics: 0, adhoc: 2, thinking: 4, coding: 5, detail: 4, trap: 2, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 3, thinking: 4, coding: 6, detail: 6, trap: 3, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, coding: 6, detail: 7, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "throw",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 2, combinatorics: 1, adhoc: 1, thinking: 4, coding: 4, detail: 3, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 4, adhoc: 3, thinking: 4, coding: 4, detail: 5, trap: 5, score: 85, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 3, combinatorics: 4, adhoc: 5, thinking: 5, coding: 4, detail: 7, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "socket",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 0, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 2, thinking: 2, coding: 1, detail: 4, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 2, coding: 2, detail: 6, trap: 3, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 3, coding: 3, detail: 6, trap: 3, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 3, thinking: 4, coding: 4, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "data",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 4, coding: 5, detail: 2, trap: 3, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 4, thinking: 6, coding: 5, detail: 3, trap: 4, score: 44, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 4, thinking: 7, coding: 5, detail: 3, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 5, thinking: 8, coding: 5, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "signal",
      parts: [
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 3, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 2, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 4, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, coding: 4, detail: 4, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 3, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, coding: 4, detail: 4, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 4, graph: 0, combinatorics: 0, adhoc: 4, thinking: 8, coding: 6, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  8: [
    {
      name: "arena",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 2, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 4, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 3, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 9, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 2, score: 76, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 4, ds: 11, string: 0, graph: 2, combinatorics: 0, adhoc: 3, thinking: 8, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "nim",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 0, trap: 0, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 2, thinking: 1, coding: 2, detail: 1, trap: 0, score: 34, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 5, coding: 2, detail: 3, trap: 1, score: 56, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 3, combinatorics: 0, adhoc: 7, thinking: 8, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "recall",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 4, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 36, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 10, string: 0, graph: 5, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 4, trap: 5, score: 76, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 11, string: 0, graph: 5, combinatorics: 0, adhoc: 2, thinking: 4, coding: 4, detail: 7, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "years",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 0, coding: 2, detail: 2, trap: 1, score: 24, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 6, combinatorics: 6, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 1, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 0, string: 0, graph: 6, combinatorics: 4, adhoc: 4, thinking: 5, coding: 2, detail: 2, trap: 3, score: 64, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 9, ds: 0, string: 0, graph: 7, combinatorics: 9, adhoc: 4, thinking: 9, coding: 3, detail: 4, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "divide",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 3, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 3, adhoc: 3, thinking: 4, coding: 2, detail: 5, trap: 2, score: 35, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 6, adhoc: 4, thinking: 6, coding: 2, detail: 7, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 8, adhoc: 4, thinking: 6, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "symbol",
      parts: [
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 3, coding: 1, detail: 3, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 4, coding: 2, detail: 7, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 1, adhoc: 3, thinking: 5, coding: 2, detail: 8, trap: 4, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 1, adhoc: 4, thinking: 5, coding: 5, detail: 9, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "light",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 2, score: 16, independent: 1, heat: 1, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 1, adhoc: 1, thinking: 4, coding: 1, detail: 2, trap: 2, score: 32, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 1, adhoc: 4, thinking: 8, coding: 3, detail: 4, trap: 4, score: 68, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 0, graph: 11, combinatorics: 1, adhoc: 4, thinking: 9, coding: 4, detail: 5, trap: 6, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "union",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 1, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 1, graph: 1, combinatorics: 3, adhoc: 0, thinking: 3, coding: 3, detail: 4, trap: 3, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 4, adhoc: 1, thinking: 3, coding: 4, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 3, graph: 1, combinatorics: 6, adhoc: 3, thinking: 5, coding: 4, detail: 7, trap: 4, score: 90, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 0, string: 4, graph: 1, combinatorics: 7, adhoc: 5, thinking: 6, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "popup",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 2, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 4, coding: 4, detail: 1, trap: 3, score: 32, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 4, score: 56, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 8, adhoc: 4, thinking: 7, coding: 4, detail: 2, trap: 4, score: 68, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 11, adhoc: 4, thinking: 9, coding: 4, detail: 5, trap: 5, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "output",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 0, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 3, coding: 3, detail: 1, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 5, thinking: 8, coding: 5, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "blur",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 1, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 2, thinking: 3, coding: 2, detail: 3, trap: 4, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 9, graph: 0, combinatorics: 0, adhoc: 3, thinking: 7, coding: 3, detail: 5, trap: 6, score: 60, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 11, graph: 0, combinatorics: 0, adhoc: 3, thinking: 8, coding: 5, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "pointer",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 1, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 1, ds: 0, string: 0, graph: 2, combinatorics: 0, adhoc: 1, thinking: 2, coding: 2, detail: 3, trap: 2, score: 16, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 1, string: 0, graph: 2, combinatorics: 0, adhoc: 2, thinking: 4, coding: 3, detail: 4, trap: 3, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 1, string: 0, graph: 3, combinatorics: 0, adhoc: 3, thinking: 4, coding: 3, detail: 6, trap: 5, score: 48, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 2, string: 0, graph: 4, combinatorics: 0, adhoc: 4, thinking: 5, coding: 4, detail: 7, trap: 6, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 5, ds: 2, string: 0, graph: 4, combinatorics: 0, adhoc: 7, thinking: 6, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "axis",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 5, thinking: 4, coding: 2, detail: 5, trap: 5, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 4, adhoc: 7, thinking: 4, coding: 4, detail: 8, trap: 6, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 7, adhoc: 8, thinking: 5, coding: 4, detail: 9, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  9: [
    {
      name: "dialog",
      parts: [
        {
          dp: 2, ds: 1, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 0, coding: 3, detail: 3, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 1, coding: 3, detail: 4, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 3, ds: 1, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 5, coding: 5, detail: 6, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 1
        },
        {
          dp: 5, ds: 3, string: 0, graph: 0, combinatorics: 8, adhoc: 6, thinking: 8, coding: 6, detail: 8, trap: 4, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "info",
      parts: [
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 3, adhoc: 3, thinking: 3, coding: 3, detail: 1, trap: 2, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 1, string: 4, graph: 0, combinatorics: 4, adhoc: 3, thinking: 5, coding: 4, detail: 2, trap: 5, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 4, graph: 0, combinatorics: 6, adhoc: 3, thinking: 6, coding: 5, detail: 2, trap: 5, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 6, graph: 0, combinatorics: 7, adhoc: 3, thinking: 8, coding: 6, detail: 4, trap: 6, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 2, string: 8, graph: 0, combinatorics: 8, adhoc: 3, thinking: 10, coding: 6, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "subtract",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 3, thinking: 2, coding: 2, detail: 2, trap: 2, score: 28, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 9, adhoc: 4, thinking: 4, coding: 4, detail: 7, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 2, combinatorics: 12, adhoc: 4, thinking: 5, coding: 5, detail: 11, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "key",
      parts: [
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 3, thinking: 1, coding: 2, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 3, detail: 5, trap: 3, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 5, thinking: 4, coding: 3, detail: 6, trap: 3, score: 48, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 7, thinking: 4, coding: 3, detail: 8, trap: 3, score: 68, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 2, graph: 0, combinatorics: 0, adhoc: 9, thinking: 5, coding: 4, detail: 11, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "decrement",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 3, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 8, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 3, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 10, adhoc: 1, thinking: 6, coding: 4, detail: 2, trap: 5, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 2, graph: 0, combinatorics: 10, adhoc: 2, thinking: 7, coding: 4, detail: 4, trap: 5, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 12, adhoc: 3, thinking: 10, coding: 6, detail: 6, trap: 5, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "object",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 0, thinking: 4, coding: 3, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 8, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, coding: 3, detail: 3, trap: 2, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 11, graph: 0, combinatorics: 0, adhoc: 1, thinking: 8, coding: 3, detail: 4, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 13, graph: 0, combinatorics: 0, adhoc: 4, thinking: 9, coding: 4, detail: 7, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "function",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 3, coding: 1, detail: 1, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 1, thinking: 4, coding: 1, detail: 2, trap: 2, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 3, thinking: 5, coding: 2, detail: 4, trap: 3, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 11, adhoc: 6, thinking: 11, coding: 4, detail: 5, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "where",
      parts: [
        {
          dp: 0, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 6, graph: 0, combinatorics: 0, adhoc: 2, thinking: 5, coding: 3, detail: 6, trap: 6, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 7, graph: 0, combinatorics: 0, adhoc: 4, thinking: 6, coding: 5, detail: 7, trap: 6, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 10, graph: 0, combinatorics: 0, adhoc: 5, thinking: 9, coding: 6, detail: 7, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  10: [
    {
      name: "graperm",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 0, thinking: 0, coding: 1, detail: 2, trap: 1, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 3, combinatorics: 0, adhoc: 1, thinking: 1, coding: 2, detail: 2, trap: 1, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 1, thinking: 2, coding: 3, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 9, combinatorics: 0, adhoc: 4, thinking: 7, coding: 3, detail: 4, trap: 1, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 13, combinatorics: 0, adhoc: 6, thinking: 9, coding: 3, detail: 5, trap: 1, score: 72, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 0, graph: 15, combinatorics: 0, adhoc: 7, thinking: 10, coding: 3, detail: 5, trap: 2, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "seal",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, adhoc: 1, thinking: 0, coding: 1, detail: 3, trap: 2, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 7, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 2, coding: 2, detail: 4, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 11, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 3, thinking: 5, coding: 2, detail: 4, trap: 2, score: 56, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 13, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 4, thinking: 6, coding: 2, detail: 4, trap: 5, score: 76, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 16, ds: 0, string: 0, graph: 0, combinatorics: 10, adhoc: 4, thinking: 9, coding: 2, detail: 4, trap: 5, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "buffer",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 1, adhoc: 1, thinking: 0, coding: 1, detail: 0, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 1, trap: 1, score: 25, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 2, adhoc: 4, thinking: 3, coding: 4, detail: 2, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 3, adhoc: 6, thinking: 4, coding: 4, detail: 5, trap: 4, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 1
        },
        {
          dp: 0, ds: 12, string: 0, graph: 0, combinatorics: 6, adhoc: 9, thinking: 8, coding: 6, detail: 11, trap: 6, score: 100, independent: 0, heat: 1, blur: 0, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "format",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 0, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 0, graph: 0, combinatorics: 2, adhoc: 3, thinking: 2, coding: 1, detail: 3, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 3, adhoc: 4, thinking: 6, coding: 3, detail: 4, trap: 5, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 3, adhoc: 7, thinking: 8, coding: 4, detail: 6, trap: 7, score: 68, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 11, string: 0, graph: 0, combinatorics: 3, adhoc: 11, thinking: 12, coding: 5, detail: 7, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "reduce",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 4, independent: 1, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 2, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 7, thinking: 5, coding: 1, detail: 4, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 3, ds: 0, string: 1, graph: 0, combinatorics: 0, adhoc: 8, thinking: 7, coding: 3, detail: 6, trap: 3, score: 44, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 4, ds: 0, string: 4, graph: 0, combinatorics: 0, adhoc: 10, thinking: 9, coding: 5, detail: 8, trap: 5, score: 64, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        },
        {
          dp: 6, ds: 0, string: 6, graph: 0, combinatorics: 1, adhoc: 12, thinking: 11, coding: 6, detail: 8, trap: 7, score: 100, independent: 0, heat: 1, blur: 1, fallback: 0, inspire: 1
        }
      ],
      tag: 0
    },
    {
      name: "status",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 2, adhoc: 2, thinking: 2, coding: 2, detail: 0, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 6, adhoc: 3, thinking: 5, coding: 2, detail: 1, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 11, adhoc: 8, thinking: 6, coding: 4, detail: 6, trap: 4, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 14, adhoc: 9, thinking: 11, coding: 4, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "merge",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 1, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 1, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 1, adhoc: 3, thinking: 7, coding: 2, detail: 3, trap: 3, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 10, combinatorics: 1, adhoc: 3, thinking: 8, coding: 3, detail: 5, trap: 4, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 13, combinatorics: 4, adhoc: 9, thinking: 11, coding: 5, detail: 8, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "ramsey",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 1, combinatorics: 1, adhoc: 1, thinking: 1, coding: 1, detail: 0, trap: 0, score: 16, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 3, combinatorics: 4, adhoc: 3, thinking: 3, coding: 2, detail: 2, trap: 1, score: 32, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 4, adhoc: 3, thinking: 4, coding: 2, detail: 3, trap: 3, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 4, combinatorics: 5, adhoc: 3, thinking: 6, coding: 2, detail: 5, trap: 4, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 9, combinatorics: 8, adhoc: 6, thinking: 6, coding: 3, detail: 6, trap: 6, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "botfriend",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, linearalgebra: 0, adhoc: 0, thinking: 1, coding: 3, detail: 3, trap: 0, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, linearalgebra: 0, adhoc: 0, thinking: 2, coding: 4, detail: 3, trap: 0, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, linearalgebra: 0, adhoc: 0, thinking: 3, coding: 5, detail: 4, trap: 0, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 10, linearalgebra: 0, adhoc: 0, thinking: 4, coding: 6, detail: 4, trap: 0, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 12, linearalgebra: 0, adhoc: 0, thinking: 5, coding: 6, detail: 4, trap: 0, score: 84, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 15, linearalgebra: 0, adhoc: 0, thinking: 7, coding: 8, detail: 4, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
  ],
  
  11: [
    {
      name: "nurikabe",
      parts: [
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 1, coding: 3, detail: 3, trap: 2, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 1, string: 1, graph: 0, combinatorics: 0, adhoc: 2, thinking: 2, coding: 5, detail: 3, trap: 2, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 2, string: 1, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, coding: 8, detail: 4, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 6, thinking: 5, coding: 10, detail: 7, trap: 3, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 1, graph: 0, combinatorics: 0, adhoc: 8, thinking: 10, coding: 14, detail: 10, trap: 4, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "botdear",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, linearalgebra: 1, adhoc: 0, thinking: 1, coding: 3, detail: 3, trap: 0, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 4, linearalgebra: 1, adhoc: 0, thinking: 2, coding: 4, detail: 3, trap: 0, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 5, linearalgebra: 2, adhoc: 0, thinking: 2, coding: 5, detail: 4, trap: 0, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, linearalgebra: 4, adhoc: 0, thinking: 2, coding: 5, detail: 4, trap: 0, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 10, linearalgebra: 6, adhoc: 0, thinking: 3, coding: 5, detail: 4, trap: 0, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "fillomino",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 2, trap: 2, score: 20, independent: 1, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 9, combinatorics: 0, adhoc: 4, thinking: 6, coding: 4, detail: 2, trap: 3, score: 35, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 13, combinatorics: 0, adhoc: 5, thinking: 7, coding: 6, detail: 5, trap: 3, score: 55, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 16, combinatorics: 0, adhoc: 7, thinking: 10, coding: 8, detail: 8, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "knowledge",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 2, combinatorics: 2, linearalgebra : 2, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 4, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 4, combinatorics: 3, linearalgebra : 3, adhoc: 1, thinking: 4, coding: 3, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 7, combinatorics: 6, linearalgebra : 4, adhoc: 2, thinking: 4, coding: 4, detail: 4, trap: 2, score: 40, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 9, combinatorics: 9, linearalgebra : 6,adhoc: 2, thinking: 6, coding: 5, detail: 5, trap: 2, score: 64, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 11, combinatorics: 12, linearalgebra : 10, adhoc: 2, thinking: 7, coding: 6, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "bin",
      parts: [
        
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 1, adhoc: 2, thinking: 0, coding: 3, detail: 2, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 4, adhoc: 2, thinking: 3, coding: 3, detail: 2, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 5, adhoc: 2, thinking: 3, coding: 4, detail: 2, trap: 2, score: 36, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 9, adhoc: 2, thinking: 3, coding: 4, detail: 2, trap: 3, score: 64, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 12, polynomial: 6, adhoc: 2, thinking: 4, coding: 4, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "surreal",
      parts: [
        
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 2, thinking: 1, gametheory: 3, coding: 3, detail: 2, trap: 1, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 3, gametheory: 4, coding: 3, detail: 2, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 3, gametheory: 5, coding: 4, detail: 2, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 5, gametheory: 6, coding: 4, detail: 2, trap: 3, score: 75, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 6, thinking: 6, gametheory: 10, coding: 5, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "mit",
      parts: [
        
        {
          dp: 0, ds: 1, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, gametheory: 1, geometry : 2, coding: 3, detail: 2, trap: 1, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, gametheory: 2, geometry : 2, coding: 3, detail: 2, trap: 2, score: 25, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, gametheory: 4, geometry : 3, coding: 4, detail: 2, trap: 2, score: 50, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 8, string: 0, graph: 0, combinatorics: 0, adhoc: 1, thinking: 4, gametheory: 4, geometry : 6, coding: 4, detail: 2, trap: 3, score: 60, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 10, string: 0, graph: 0, combinatorics: 0, adhoc: 3, thinking: 5, gametheory: 6, geometry : 6, coding: 5, detail: 3, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "counting",
      parts: [
        
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 2, trap: 1, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 0, combinatorics: 4,  polynomial: 4, adhoc: 0, thinking: 1, coding: 3, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 10, polynomial: 9, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
      ],
      tag: 0
    },
    {
      name: "lovetheory",
      parts: [
        
        {
          dp: 0, ds: 0, string: 3, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 2, trap: 1, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 6, graph: 0, combinatorics: 0,  polynomial: 0, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 10, graph: 0, combinatorics: 0,  polynomial: 3, adhoc: 0, thinking: 4, coding: 3, detail: 2, trap: 2, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 14, graph: 0, combinatorics: 0, polynomial: 5, adhoc: 0, thinking: 6, coding: 5, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
      ],
      tag: 0
    },
    {
      name: "thechosenone",
      parts: [
        
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 1, coding: 3, detail: 2, trap: 1, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 0,  polynomial: 1, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 2, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 13, ds: 0, string: 0, graph: 0, combinatorics: 0,  polynomial: 2, adhoc: 0, thinking: 4, coding: 3, detail: 2, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 17, ds: 0, string: 0, graph: 0, combinatorics: 0, polynomial: 4, adhoc: 0, thinking: 4, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
      ],
      tag: 0
    },
    {
      name: "seniorious",
      parts: [
        
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, polynomial: 1, gametheory : 1, adhoc: 0, thinking: 1, coding: 3, detail: 2, trap: 1, score: 12, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, polynomial: 1, gametheory : 2, adhoc: 0, thinking: 1, coding: 3, detail: 2, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0,  polynomial: 3, gametheory : 4, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 2, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0,  polynomial: 3, gametheory : 7, adhoc: 0, thinking: 4, coding: 3, detail: 2, trap: 2, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, polynomial: 6, gametheory : 10, adhoc: 0, thinking: 4, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
      ],
      tag: 0
    },
    {
      name: "cauchysheep",
      parts: [
        
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, thinking: 2, coding: 3, detail: 2, trap: 1, score: 10, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 4, thinking: 4, coding: 3, detail: 2, trap: 2, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0,  adhoc: 8, thinking: 5, coding: 4, detail: 2, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 12, thinking: 8, coding: 5, detail: 2, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 16, thinking: 10, coding: 5, detail: 2, trap: 2, score: 80, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 20, thinking: 16, coding: 5, detail: 2, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
      ],
      tag: 0
    },
    {
      name: "fractions",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, numbertheory: 2, thinking: 2, coding: 3, detail: 2, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, numbertheory: 3, thinking: 3, coding: 3, detail: 2, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0,  adhoc: 0, numbertheory: 4, thinking: 4, coding: 4, detail: 2, trap: 2, score: 60, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, numbertheory: 5, thinking: 6, coding: 5, detail: 2, trap: 2, score: 85, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, numbertheory: 6, thinking: 8, coding: 6, detail: 4, trap: 2, score: 95, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, adhoc: 0, numbertheory: 8, thinking: 9, coding: 8, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
      ],
      tag: 0
    }
  ],
  12: [
    {
      name: "euler",
      parts: [
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 0, coding: 3, detail: 2, trap: 1, score: 8, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 6, thinking: 3, coding: 3, detail: 6, trap: 4, score: 16, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 5, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 7, thinking: 6, coding: 4, detail: 8, trap: 4, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 10, adhoc: 7, thinking: 10, coding: 4, detail: 8, trap: 7, score: 48, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 17, adhoc: 8, thinking: 14, coding: 4, detail: 8, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    }, 
    {

      name: "prg",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 3, adhoc: 3, thinking: 1, coding: 3, detail: 2, trap: 1, score: 5, independent: 1, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 7, adhoc: 6, thinking: 3, coding: 3, detail: 6, trap: 4, score: 20, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 8, adhoc: 7, thinking: 13, coding: 4, detail: 8, trap: 4, score: 50, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 15, adhoc: 10, thinking: 20, coding: 4, detail: 8, trap: 7, score: 100, independent: 0, heat: 0, blur: 1, fallback: 1, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "geometry",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, geometry: 5, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 3, detail: 10, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, geometry: 8, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 4, detail: 16, trap: 1, score: 30, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, geometry: 16, linearalgebra: 0, adhoc: 2, thinking: 3, coding: 9, detail: 20, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "count",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 2, geometry: 0, linearalgebra: 4, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 5, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 6, geometry: 0, linearalgebra: 7, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 10, geometry: 0, linearalgebra: 10, adhoc: 1, thinking: 2, coding: 2, detail: 2, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 14, geometry: 0, linearalgebra: 12, adhoc: 2, thinking: 3, coding: 3, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {

      name: "wblt",
      parts: [
        {
          dp: 0, ds: 6, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 15, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 16, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 4, detail: 4, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 18, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 9, detail: 9, trap: 1, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 20, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 2, thinking: 3, coding: 14, detail: 10, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "wblt2",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 16, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 5, detail: 4, trap: 1, score: 44, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 19, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 3, coding: 8, detail: 11, trap: 1, score: 72, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 22, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 2, thinking: 4, coding: 11, detail: 12, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "wcwblt",
      parts: [
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 16, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 4, detail: 4, trap: 1, score: 24, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 18, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 6, detail: 8, trap: 1, score: 48, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 20, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 14, detail: 10, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }, 
    {

      name: "tars2",
      parts: [
        {
          dp: 0, ds: 2, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 23, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 4, detail: 4, trap: 1, score: 39, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 6, detail: 8, trap: 1, score: 55, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 7, string: 0, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 19, detail: 15, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }, 
    {
      name: "bass",
      parts: [
        {
          dp: 0, ds: 2, string: 5, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 10, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 4, string: 7, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 3, detail: 3, trap: 1, score: 20, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 5, string: 9, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 4, detail: 6, trap: 1, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 10, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 2, thinking: 2, coding: 5, detail: 8, trap: 2, score: 65, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 6, string: 14, graph: 0, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 3, thinking: 2, coding: 8, detail: 12, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }, 
    {
      name: "sandpile",
      parts: [
        {
          dp: 1, ds: 1, string: 0, graph: 1, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 1, detail: 1, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 3, string: 0, graph: 4, combinatorics: 0, geometry: 0, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 3, detail: 3, trap: 1, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 6, string: 0, graph: 5, combinatorics: 0, geometry: 0, linearalgebra: 1, adhoc: 3, thinking: 3, coding: 4, detail: 6, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 10, string: 0, graph: 8, combinatorics: 0, geometry: 0, linearalgebra: 1, adhoc: 4, thinking: 4, coding: 5, detail: 8, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 9, ds: 12, string: 0, graph: 9, combinatorics: 0, geometry: 0, linearalgebra: 2, adhoc: 5, thinking: 6, coding: 8, detail: 6, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }, 
    {
      name: "moon",
      parts: [
        {
          dp: 1, ds: 0, string: 0, graph: 0, combinatorics: 0, geometry: 3, linearalgebra: 0, adhoc: 1, thinking: 1, coding: 1, detail: 8, trap: 0, score: 8, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 2, ds: 0, string: 0, graph: 0, combinatorics: 0, geometry: 5, linearalgebra: 0, adhoc: 1, thinking: 2, coding: 2, detail: 10, trap: 1, score: 16, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, geometry: 6, linearalgebra: 0, adhoc: 3, thinking: 3, coding: 4, detail: 14, trap: 1, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, geometry: 8, linearalgebra: 0, adhoc: 3, thinking: 4, coding: 6, detail: 16, trap: 2, score: 68, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 4, ds: 0, string: 0, graph: 4, combinatorics: 0, geometry: 13, linearalgebra: 0, adhoc: 3, thinking: 6, coding: 12, detail: 24, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "homeworkfromzhejiang",
      parts: [
        {
          dp: 2, ds: 0, string: 0, graph: 5, combinatorics: 5, linearalgebra : 7, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 6, combinatorics: 7, linearalgebra : 10, adhoc: 1, thinking: 4, coding: 3, detail: 3, trap: 2, score: 24, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 8, combinatorics: 10, linearalgebra : 12, adhoc: 2, thinking: 4, coding: 4, detail: 4, trap: 2, score: 36, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 10, combinatorics: 12, linearalgebra : 16,adhoc: 2, thinking: 6, coding: 5, detail: 5, trap: 2, score: 52, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        },
        {
          dp: 3, ds: 0, string: 0, graph: 10, combinatorics: 16, linearalgebra : 20, adhoc: 2, thinking: 7, coding: 6, detail: 5, trap: 3, score: 100, independent: 0, heat: 0, blur: 1, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "sphere",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 5, combinatorics: 0, linearalgebra : 4, geometry : 4, adhoc: 0, thinking: 0, coding: 1, detail: 0, trap: 1, score: 12, independent: 1, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 6, combinatorics: 0, linearalgebra : 6, geometry : 6, adhoc: 0, thinking: 4, coding: 3, detail: 3, trap: 2, score: 32, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 0, linearalgebra : 12, geometry : 6,  adhoc: 0, thinking: 4, coding: 4, detail: 4, trap: 2, score: 64, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 8, combinatorics: 0, linearalgebra : 18, geometry : 16,  adhoc: 0, thinking: 4, coding: 4, detail: 4, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "inequality",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 0, adhoc: 4, thinking: 4, coding: 1, detail: 2, trap: 1, score: 8, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 0, adhoc: 6, thinking: 6, coding: 3, detail: 6, trap: 2, score: 28, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 0,  adhoc: 10, thinking: 12, coding: 4, detail: 12, trap: 2, score: 52, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 0,  adhoc: 14, thinking: 16, coding: 4, detail: 20, trap: 3, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "butterfly",
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 3, adhoc: 2, thinking: 4, coding: 1, detail: 1, trap: 1, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 5, adhoc: 2, thinking: 5, coding: 1, detail: 3, trap: 2, score: 40, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 8,  adhoc: 4, thinking: 6, coding: 1, detail: 5, trap: 2, score: 75, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 0, linearalgebra : 0, geometry : 12,  adhoc: 4, thinking: 8, coding: 2, detail: 10, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    },
    {
      name: "yuhaodu",
      parts: [
        {
          dp: 4, ds: 0, string: 0, graph: 0, combinatorics: 0, numbertheory : 2, adhoc: 0, thinking: 1, coding: 1, detail: 1, trap: 1, score: 5, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, numbertheory : 5, adhoc: 0, thinking: 2, coding: 1, detail: 3, trap: 2, score: 15, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 6, ds: 0, string: 0, graph: 0, combinatorics: 0, numbertheory : 8, adhoc: 0, thinking: 4, coding: 1, detail: 3, trap: 2, score: 45, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 8, ds: 0, string: 0, graph: 0, combinatorics: 0, numbertheory : 10, adhoc: 0, thinking: 4, coding: 1, detail: 3, trap: 2, score: 70, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        },
        {
          dp: 10, ds: 0, string: 0, graph: 0, combinatorics: 0, numbertheory : 13,  adhoc: 0, thinking: 4, coding: 2, detail: 3, trap: 2, score: 100, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0
    }
  ],
  1000: [
    {
      name: "笔试题",
      isSubmitAnswer: true,
      mean: 100,
      variance: 2,
      parts: [
        {
          dp: 0, ds: 0, string: 0, graph: 0, combinatorics: 1, numbertheory : 0, adhoc: 1, thinking: 1, coding: 0, detail: 0, trap: 0, score: 0, independent: 0, heat: 0, blur: 0, fallback: 0, inspire: 0
        }
      ],
      tag: 0  
    }
  ]
}