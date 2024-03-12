import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://classic.exame.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-22-at-12.49.27.jpeg?quality=70&strip=info&w=1024"
  contentTitle: string = "Empresas de tecnologia dominam IPOs"
  contentDescription: string = "Com estreia da Multilaser nesta quinta, o número de empresas do setor na bolsa já é maior do que o de bancos."

  constructor() {}

  ngOnInit(): void {
    
  }

}
