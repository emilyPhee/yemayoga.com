// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import yogaClass from './yoga-class';
import review from './review';
import system from './system';
import about from './about';
import weeklySchedule from './weekly-schedule';
import yogaTime from './yoga-time';
import yogaPage from './yoga-page';
import schedule from './schedule';
import price from './price';
import otherPrice from './other-price';
import zoomClass from './zoom-class';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    yogaClass,
    review,
    system,
    about,
    schedule,
    weeklySchedule,
    yogaTime,
    yogaPage,
    price,
    otherPrice,
    zoomClass,
  ]),
});
