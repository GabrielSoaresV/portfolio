import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

interface CarouselItem {
  image: string;
  descricao: string;
}

@Component({
  standalone: false,
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.css',
})
export class SobreMim implements OnInit, OnDestroy {
  currentSlide = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  private intervalId?: number;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  private startCarousel(): void {
    this.stopCarousel();

    this.intervalId = window.setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 6000);
  }

  private stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  pauseCarousel(): void {
    this.stopCarousel();
  }

  resumeCarousel(): void {
    this.startCarousel();
  }

  carouselItems: CarouselItem[] = [
    {
      image: 'img-sobre-mim-carrossel/foto_1.png',
      descricao: 'Teste de foto 1'
    },
    {
      image: 'img-sobre-mim-carrossel/foto_2.png',
      descricao: 'Teste de foto 2'
    },
    {
      image: 'img-sobre-mim-carrossel/foto_3.png',
      descricao: 'Teste de foto 3'
    },
    {
      image: 'img-sobre-mim-carrossel/foto_4.png',
      descricao: 'Teste de foto 4'
    }
  ];

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.carouselItems.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
