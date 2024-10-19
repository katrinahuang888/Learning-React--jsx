import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from '../components/Button';

function ButtonPage() {
    return (
        <div>
            <div>
                <Button danger>
                    <GoBell />
                    Click me!
                </Button>
            </div>
            <div>
                <Button warning outline>
                    <GoCloudDownload />
                    Buy now!
                </Button>
            </div>
            <div>
                <Button success outline rounded>
                    <GoDatabase />
                    See deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
)};

export default ButtonPage;