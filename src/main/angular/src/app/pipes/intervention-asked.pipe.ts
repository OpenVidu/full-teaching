import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '../classes/user-data';

@Pipe({
    name: 'interventionAskedFilter',
    pure: false
})
export class InterventionAskedPipe implements PipeTransform {
    transform(items: UserData[]): any {
        if (!items) {
            return items;
        }
        // Return only those users which have asked for intervention
        return items.filter(item => item.interventionRequired);
    }
}