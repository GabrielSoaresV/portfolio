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
  private touchStartX = 0;
  private touchStartY = 0;
  expandido = false;

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
      descricao: 'Atualmente na empresa'
    },
    {
      image: 'img-sobre-mim-carrossel/foto_2.png',
      descricao: 'Primeiro dia na empresa'
    },
    {
      image: 'img-sobre-mim-carrossel/foto_3.png',
      descricao: 'Meu estágiario favorito'
    },
    {
      image: 'img-sobre-mim-carrossel/foto_4.png',
      descricao: 'Primeiro evento de technologia'
    },
    {
      image: 'img-sobre-mim-carrossel/foto_5.png',
      descricao: 'Mesa de trabalho'
    },
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

  toggle(): void {
    this.expandido = !this.expandido;
  }

  onTouchStart(event: TouchEvent): void {
    if (!this.isMobileViewport() || event.touches.length !== 1) return;

    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.pauseCarousel();
  }

  onTouchEnd(event: TouchEvent): void {
    if (!this.isMobileViewport() || !event.changedTouches.length) return;

    const distanceX = event.changedTouches[0].clientX - this.touchStartX;
    const distanceY = event.changedTouches[0].clientY - this.touchStartY;
    const minimumSwipeDistance = 45;

    if (Math.abs(distanceX) >= minimumSwipeDistance && Math.abs(distanceX) > Math.abs(distanceY)) {
      distanceX < 0 ? this.nextSlide() : this.prevSlide();
    }

    this.resumeCarousel();
  }

  onTouchCancel(): void {
    if (this.isMobileViewport()) this.resumeCarousel();
  }

  private isMobileViewport(): boolean {
    return window.matchMedia('(max-width: 768px)').matches;
  }
}
