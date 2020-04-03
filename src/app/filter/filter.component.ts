import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  parts: Array<any> = [];
  cities: Array<string> = [];
  types: Array<string> = [];
  colors = [
    "amber darken-2",
    "indigo",
    "pink darken-4",
    "green darken-2",
    "yellow darken-2",
    "mdb-color lighten-1",
    "red",
    "purple darken-1",
    "lime darken-4",
    "cyan",
    "brown",
    "pink lighten-1",
    "light-green",
    "deep-orange lighten-1",
    "light-blue accent-4"
  ];

  @Input() fullParts: Array<any> = [
    {
      id: 1,
      name: "Azadi Hotel",
      type: "Restaurant",
      city: "Tehran",
      hotel: "Hotel",
      price: "10000$",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 2,
      name: "Null Hotel",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 3,
      name: "My Restaurant",
      type: "Hotel",
      city: "Tehran",
      hotel: "Hotel",
      price: "10000$",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 5,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 6,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 7,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 8,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 9,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 10,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 11,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 12,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 14,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 16,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    },
    {
      id: 15,
      name: "Hello",
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui ducimus incidunt nulla, similique modi consectetur vel pariatur excepturi? Deserunt fugiat voluptates ullam architecto laborum culpa perspiciatis, veritatis consequatur iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et nihil veniam velit perferendis exercitationem ullam nobis inventore eos quis incidunt ut quae, omnis modi sit itaque vitae delectus commodi."
    }
  ];
  @Input() fullCities: Array<any> = ["Tehran", "Zanjan", "Mashhad", "Tabriz"];
  @Input() fullTypes: Array<any> = ["Hotel", "Restaurant", "Hospital"];

  constructor() {}

  ngOnInit() {
    this.parts = Object.assign([], this.fullParts);
    this.cities = Object.assign([], this.fullCities);
    this.types = Object.assign([], this.fullTypes);
  }

  filter(item) {
    this.parts = [];
    if (item == "all") {
      this.fullParts.forEach(element => {
        this.parts.push(element);
      });
    } else {
      this.fullParts.forEach(element => {
        if (element.city == item || element.type == item)
          this.parts.push(element);
      });
    }
  }

  getColor(id: number) {
    console.log(id);
    console.log(this.colors[id]);

    if (id >= this.colors.length) return this.colors[id % this.colors.length];
    else return this.colors[id];
  }
}
