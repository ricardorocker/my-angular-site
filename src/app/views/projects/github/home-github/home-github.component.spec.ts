import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGithubComponent } from './home-github.component';

describe('HomeGithubComponent', () => {
  let component: HomeGithubComponent;
  let fixture: ComponentFixture<HomeGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
