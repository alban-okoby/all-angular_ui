import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoadingComponent } from './search-loading.component';

describe('SearchLoadingComponent', () => {
  let component: SearchLoadingComponent;
  let fixture: ComponentFixture<SearchLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
