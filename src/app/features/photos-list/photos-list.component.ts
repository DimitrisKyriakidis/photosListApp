import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from '../../shared/models/photo.model';
import { MainActionTypes } from '../../store/main.actions';
import { selectAllPhotos, selectLoading } from '../../store/main.selector';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
})
export class PhotosListComponent {
  @Input() photos$: Observable<Photo[]>;

  @Input() infiniteScroll: boolean = false;

  @Output() selectedPhoto = new EventEmitter<Photo>();

  loading: boolean = false;

  listOptions = {
    pageIndex: 1,
    pageSize: 6,
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.loading = true;
    this.store.dispatch({
      type: MainActionTypes.getAllPhotos,
      pageIndex: this.listOptions.pageIndex,
      pageSize: this.listOptions.pageSize,
    });

    this.loading = false;
  }

  onScroll(event) {
    if (this.infiniteScroll) {
      const element = event.target;

      let atBottom =
        element.scrollHeight - element.scrollTop === element.clientHeight;

      if (atBottom && !this.loading) {
        this.listOptions.pageIndex++;
        this.loading = true;

        setTimeout(() => {
          this.getAllPhotos();
        }, 300);
      }
    }
  }
  selectPhoto(photo: Photo) {
    this.selectedPhoto.emit(photo);
  }
}
