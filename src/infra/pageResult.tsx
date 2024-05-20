import { DefaultLayout } from ".";

const PageResult = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center h-screen w-auto">
        <div className=" mt-50 text-center">
          <h1 className="font-bold text-3xl">
            Bạn đã đăng ký thành công trở thành đối tác bán hàng của step Go
          </h1>
          <p className="py-5">
            Chúng tôi đã gửi cho bạn 1 email, trong đó bao gồm tài khoản
          </p>
          <p>và mật khẩu để đăng nhập vào trang web quản lý cửa hàng</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PageResult;
