import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsViewerComponent } from './songs-viewer.component';

describe('SongsViewerComponent', () => {
  let component: SongsViewerComponent;
  let fixture: ComponentFixture<SongsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
