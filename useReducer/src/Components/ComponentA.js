// eslint-disable-next-line import/no-cycle
import ComponentB from './ComponentB';

export default function ComponentA() {
    return (
        <div>
            <ComponentB />
        </div>
    );
}
