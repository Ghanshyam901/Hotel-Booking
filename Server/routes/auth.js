import  express  from 'express';
import { showMessage } from '../controller/auth';

const router = express.Router();

// controller


router.get('/:message',showMessage)

module.exports = router;