import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const customMap = new CustomMap('map');

const user = new User();
customMap.addMarker(user);

const company = new Company();
customMap.addMarker(company);
