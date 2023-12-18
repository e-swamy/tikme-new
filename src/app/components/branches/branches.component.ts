import { Component } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {
  chips: any = ["Snacks", "Hakka", "Chaats", "Main", "Thali", "Salads", "Kulcha's", "South Indian", "Small Container", "Medium Container", "Large Container", "Extra Large Container", "Sweets", "Breads", "Desserts", "Drinks"]
  
  menuItems: any = [
    {
      id: 1,
      title: "Aperiam vero necessitatibus labore",
      describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      imgUrl: "https://source.unsplash.com/Oxb84ENcFfU/350x350",
      price:"9.49",
      discountPrice:"9.99",
      badge: false
    },
    {
      id: 2,
      title: "Fugit similique ipsam dolorem incidunt!",
      describe: "Velit quibusdam obcaecati dolorem quam sequi asperiores veritatis",
      imgUrl: "https://source.unsplash.com/qits91IZv1o/350x350",
      price:"9.49",
      discountPrice:"9.99",
      badge: true
    },
    {
      id: 3,
      title: "Quia dolor, eos magnam ipsam natus tempora nobis",
      describe: "Doloremque tempore aut, enim cupiditate laborum delectus iste",
      imgUrl: "https://source.unsplash.com/GIUc-l74UT8/350x350",
      price:"9.49",
      discountPrice:"9.99",
      badge: true
    },
    {
      id: 4,
      title: "Cupiditate quibusdam saepe quia sapiente",
      describe: "Modi itaque tempore sunt ab aperiam",
      imgUrl: "https://source.unsplash.com/IGfIGP5ONV0/350x350",
      price:"9.49",
      discountPrice:"9.99",
      badge: false
    },
    {
      id: 5,
      title: "Dignissimos beatae, inventore exercitationem maiores alias",
      describe: "Aliquam dignissimos architecto iusto reiciendis labore tempora fugit",
      imgUrl: "https://source.unsplash.com/PxJ9zkM2wdA/350x350",
      price:"9.49",
      discountPrice:"9.99",
      badge: false
    },
    {
      id: 6,
      title: "Quia dolor, eos magnam ipsam natus tempora nobis",
      describe: "Doloremque tempore aut, enim cupiditate laborum delectus iste",
      imgUrl: "https://source.unsplash.com/GIUc-l74UT8/350x350",
      price:"9.49",
      discountPrice:"9.99",
      badge: true
    },
    {
      id: 7,
      title: "Cupiditate quibusdam saepe quia sapiente",
      describe: "Modi itaque tempore sunt ab aperiam",
      imgUrl: "https://source.unsplash.com/IGfIGP5ONV0/350x350",
      price:"9.49",
      discountPrice:"9.99",
      badge: false
    }
  ]
}
