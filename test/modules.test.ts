import sinon from "sinon";
import assert from "assert";
import * as mod from "../src/libs/modules";

const fooSpy = sinon.spy(mod["foo"]);
const getterStub = sinon.stub(mod, "foo").get(() => fooSpy);

mod.foo();

try {
    assert(fooSpy.called);
    console.log("passed");
} catch (e) {
    console.error(e);
}

getterStub.restore();
